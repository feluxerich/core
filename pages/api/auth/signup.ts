import userSchema from '@models/userSchema';
import { connectToDatabase } from '@utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';
import pw from '@utils/password';
import { core, discord } from '@utils/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const connection = await connectToDatabase();
  if (connection?.readyState !== 1) return res.status(500).json({ error: 'Database error' });
  const { username, password, discord: discordId } = req.query as any;

  if (!username || !password || !discordId) return res.status(400).json({ error: 'Missing params' });
  if (await core.exists(username)) return res.status(400).json({ error: 'Username is taken' });
  if (!(await discord.exists(discordId))) return res.status(400).json({ error: 'Discord id is not assigned' });

  const obj = new userSchema({
    username,
    password_hash: pw.hash(password),
    creation_date: Date.now(),
    connections: {
      discord: discordId,
    },
    history: [core.getHistoryEntry(req)],
  });

  await obj.save();

  res.json(obj);
}
