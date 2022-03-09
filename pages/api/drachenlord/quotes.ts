import type { NextApiRequest, NextApiResponse } from 'next';
import drachenlord from '@data/drachenlord.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    length: drachenlord.quotes.length,
    data: drachenlord.quotes,
  });
}
