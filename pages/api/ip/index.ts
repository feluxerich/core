import type { NextApiRequest, NextApiResponse } from 'next';
import { getClientIp } from 'request-ip';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ ip: getClientIp(req) });
  } catch ({ error }) {
    res.status(500).json({ error });
  }
}
