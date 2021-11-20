import { basicFetch } from '@utils/fetch';
import type { NextApiRequest, NextApiResponse } from 'next';
import { covid } from '@config/covid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const days = covid.days;

  const incidence = (await basicFetch(`https://api.corona-zahlen.org/states/history/incidence/${days}`))?.data;

  res.status(200).json(incidence);
}
