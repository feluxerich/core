import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

type Data = {
  message?: string;
  error?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.cookies.jwt) {
    const session = jwt.decode(req.cookies.jwt) as any;

    res.setHeader('Set-Cookie', 'jwt=deleted; Max-Age=0; path=/');
    res.setHeader('Location', '/');
    return res.status(307).json({ message: 'JWT Token destroyed successfully' });
  }
  return res.status(404).json({ error: 'No JWT Token found in Cookies' });
}
