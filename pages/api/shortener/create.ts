import shortener from '@utils/api/shortener/main';
import { baseUrl } from '@utils/fetch';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  var resp = await shortener.insert({ link: JSON.parse(req.body).dest });
  res.status(200).json({ resp, url: baseUrl(req) });
}
