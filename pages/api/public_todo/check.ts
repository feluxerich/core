import type { NextApiRequest, NextApiResponse } from 'next';
import publicTodo from '@utils/api/publicTodo/main';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { alias, content } = JSON.parse(req.body);

  var resp = await publicTodo.check(alias, content);
  res.status(200).json({ resp });
}
