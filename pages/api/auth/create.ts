import type { NextApiRequest, NextApiResponse } from 'next';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { core, discord } from '@utils/api';
import { getClientIp } from 'request-ip';

type Data = {
  token?: any;
  error?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { query } = req as any;

  if (!query.username || !query.password) {
    return res.status(400).json({
      error: 'Missing params',
    });
  }

  var user = await core.get(query.username);

  if (!user) {
    return res.status(404).json({
      error: 'User does not exist',
    });
  }

  if (!(await compare(query.password, user.password_hash))) {
    return res.status(403).json({
      error: 'Wrong password',
    });
  }

  const jwtToken = jwt.sign(
    {
      uuid: user?.uuid,
      username: user?.username,
      avatar: await discord.avatar(user?.extra?.discord),
      ip: getClientIp(req),
    },
    process.env.JWT_SECRET_KEY!,
    { expiresIn: '1d' },
  );

  res.setHeader('Set-Cookie', `jwt=${jwtToken}; Max-Age=${60 * 60 * 24}; path=/`);
  return res.status(200).json(jwt.decode(jwtToken) as any);
}
