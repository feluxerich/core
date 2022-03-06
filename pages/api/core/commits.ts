import core from '@utils/api/core/main';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { per_page, page } = Object.freeze<any>(req.query);

  const data = await core.commits({ page: page ? parseInt(page) : undefined, per_page: per_page ? parseInt(per_page) : undefined });

  res.status(200).json({
    length: data?.length,
    data: data,
  });
}
