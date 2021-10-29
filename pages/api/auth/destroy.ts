import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
  error?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.cookies.jwt) {
    res.setHeader('Set-Cookie', 'jwt=deleted; Max-Age=0; path=/');
    return res.status(200).json({ message: 'JWT Token destroyed successfully' });
  }
  return res.status(404).json({ error: 'No JWT Token found in Cookies' });
}
