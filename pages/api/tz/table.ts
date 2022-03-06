import type { NextApiRequest, NextApiResponse } from 'next';
import tz from '@utils/api/timezone/main';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q } = Object.freeze(req.query);

  if (q && typeof q === 'string') {
    res.status(200).json(tz.search(q));
  } else {
    res.status(200).json(tz.table());
  }
}
