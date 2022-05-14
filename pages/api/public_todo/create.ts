import type { NextApiRequest, NextApiResponse } from 'next';
import publicTodo from '@utils/api/publicTodo/main';
import { baseUrl } from '@utils/fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  var resp = await publicTodo.insert({ title: JSON.parse(req.body).title });
  res.status(200).json({ resp, url: baseUrl(req) });
}
