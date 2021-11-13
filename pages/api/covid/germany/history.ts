import { basicFetch } from '@utils/fetch';
import type { NextApiRequest, NextApiResponse } from 'next';
import { covid } from '@config/covid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const days = covid.days;

  const cases = (await basicFetch(`https://api.corona-zahlen.org/germany/history/cases/${days}`))?.data;
  const incidence = (await basicFetch(`https://api.corona-zahlen.org/germany/history/incidence/${days}`))?.data;
  const deaths = (await basicFetch(`https://api.corona-zahlen.org/germany/history/deaths/${days}`))?.data;
  const recovered = (await basicFetch(`https://api.corona-zahlen.org/germany/history/recovered/${days}`))?.data;

  res.status(200).json({ cases, incidence, deaths, recovered });
}
