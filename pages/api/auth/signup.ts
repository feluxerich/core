import userSchema from '@models/userSchema';
import { connectToDatabase } from '@utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';
import pw from '@utils/password';
import { getClientIp } from 'request-ip';
import { core, discord } from '@utils/api';
import { v4 } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const connection = await connectToDatabase();
  if (connection?.readyState !== 1) return res.status(500).json({ error: 'Database error' });
  const { username, password, discord: discordId } = req.query as any;

  if (!username || !password || !discordId) return res.status(400).json({ error: 'Missing params' });
  if (await core.exists(username)) return res.status(400).json({ error: 'Username is taken' });
  if (!(await discord.exists(discordId))) return res.status(400).json({ error: 'Discord id is not assigned' });

  const obj = new userSchema({
    uuid: v4(),
    username,
    password_hash: pw.hash(password),
    extra: {
      ip: getClientIp(req),
      discord: discordId,
    },
  });

  await obj.save();

  res.json(obj);
}
