import type { NextApiRequest, NextApiResponse } from 'next';
import si from 'systeminformation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(await si.getAllData());
}
