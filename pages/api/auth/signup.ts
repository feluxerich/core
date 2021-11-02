import userSchema from '@models/userSchema';
import { connectToDatabase } from '@utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';
import pw from '@utils/password';
import { getClientIp } from 'request-ip';
import { core, discord } from '@utils/api';
import { v4 } from 'uuid';
import validator from 'validator';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const connection = await connectToDatabase();
  if (connection?.readyState !== 1) return res.status(500).json({ error: 'Database error' });
  const { username, password, discord: discordId, mail } = req.query as any;

  if (!username || !password || !discordId || !mail) return res.status(400).json({ error: 'Missing params' });
  if (!validator.isEmail(mail)) return res.status(400).json({ error: 'Email is not valid' });
  if (await core.exists(username)) return res.status(400).json({ error: 'Username is taken' });
  if (!(await discord.exists(discordId))) return res.status(400).json({ error: 'Discord id is not assigned' });

  const obj = new userSchema({
    uuid: v4(),
    mail,
    username,
    password_hash: pw.hash(password),
    extra: {
      user_agent: req.headers['user-agent'],
      ip: getClientIp(req),
      discord: discordId,
      first_login: Date.now(),
      last_login: Date.now(),
    },
  });

  await obj.save();

  res.json(obj);
}
