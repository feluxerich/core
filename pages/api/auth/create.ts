import userSchema from '@models/userSchema';
import { connectToDatabase } from '@utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

type Data = {
  token?: any;
  error?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await connectToDatabase();
  const reqBody = JSON.parse(req.body);

  if (!(reqBody.username && reqBody.password)) {
    return res.status(400).json({
      error: 'Username and Password parameter required',
    });
  }

  var user = await userSchema.findOne({ username: reqBody.username });

  if (!user) {
    return res.status(404).json({
      error: 'No such a User found',
    });
  }

  if (!(await compare(reqBody.password, user.password_hash))) {
    return res.status(403).json({
      error: 'Password incorrect',
    });
  }

  const jwtToken = sign(
    {
      username: user.username,
      password_hash: user.password_hash,
    },
    process.env.JWT_SECRET_KEY as any,
    { expiresIn: '1d' },
  );

  res.setHeader('Set-Cookie', `jwt=${jwtToken}; Max-Age=${60 * 60 * 24}; path=/`);
  return res.status(200).json({ token: jwtToken });
}
