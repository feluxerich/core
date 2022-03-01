import coingecko from '@utils/coingecko';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { ids } = Object.freeze(req.query);

  const data = await coingecko.currencies(ids?.toString().split(','));

  res.status(200).json(data);
}
