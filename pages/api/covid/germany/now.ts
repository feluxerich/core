import { basicFetch } from '@utils/fetch';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const germany = await basicFetch('https://api.corona-zahlen.org/germany');

  res.status(200).json(germany);
}
