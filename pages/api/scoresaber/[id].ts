import { basicFetch } from '@m2vi/iva';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = Object.freeze(req.query);
  const data = await basicFetch<any>(`https://scoresaber.com/api/player/${id}/full`);

  res.status(200).json(data);
}
