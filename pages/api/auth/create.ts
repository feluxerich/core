import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { core, discord, ipClient } from '@utils/api';

type Data = {
  token?: any;
  error?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { query } = req as any;

    if (!query.username || !query.password) {
      return res.status(400).json({
        error: 'Missing params',
      });
    }

    var user = await core.findOne({ username: query.username });

    if (!user) {
      return res.status(404).json({
        error: 'User does not exist',
      });
    }

    if (!(await bcrypt.compare(query.password, user.password_hash))) {
      return res.status(403).json({
        error: 'Wrong password',
      });
    }
    await core.updateAfterLogin(query?.username, req);

    const jwtToken = jwt.sign(
      {
        username: user.username,
        avatar: await discord.avatar(user.connections.discord),
        ip: await ipClient.lookup(req),
        session: {
          start_time: Date.now(),
        },
      },
      process.env.JWT_SECRET_KEY!,
      { expiresIn: '1d' },
    );

    res.setHeader('Set-Cookie', `jwt=${jwtToken}; Max-Age=${60 * 60 * 24}; path=/`);
    return res.status(200).json(jwt.decode(jwtToken) as any);
  } catch (error: any) {
    return res.status(500).json({
      error: error?.message,
    });
  }
}
