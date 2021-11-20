import type { NextApiRequest, NextApiResponse } from 'next';
import { basicFetch } from '@utils/fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { language, source } = req.query as any;

  if (!(language && source)) throw Error('Query param missing');

  const data = await basicFetch('https://emkc.org/api/v1/piston/execute', {
    method: 'POST',
    body: JSON.stringify({
      language,
      source,
    }),
  });

  res.status(200).json(data);
}
