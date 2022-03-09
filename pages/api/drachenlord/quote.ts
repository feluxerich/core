import type { NextApiRequest, NextApiResponse } from 'next';
import drachenlord from '@data/drachenlord.json';
import sample from 'lodash/sample';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(sample(drachenlord.quotes));
}
