import type { NextApiRequest, NextApiResponse } from 'next';
import publicTodo from '@utils/api/publicTodo/main';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { alias, entry } = JSON.parse(req.body);

  var resp = await publicTodo.appendEntries(alias, entry);
  res.status(200).json({ resp });
}
