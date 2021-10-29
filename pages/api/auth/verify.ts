import type { NextApiRequest, NextApiResponse } from 'next';
import { checkJwtToken } from '@utils/utils';

type Data = {
  user?: any;
  error?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  var authorized = await checkJwtToken(req.cookies.jwt);
  if (req.cookies.jwt && authorized) {
    return res.status(200).json({ user: authorized });
  }

  return res.status(401).json({ error: 'User not logged in or invalid JWT token' });
}
