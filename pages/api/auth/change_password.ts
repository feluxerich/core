import userSchema from '@models/userSchema';
import { connectToDatabase } from '@utils/database';
import pw from '@utils/password';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success?: any;
  error?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { user, oldPassword, newPassword } = JSON.parse(req.body);

  const oldDBPassword = (await userSchema.findOne({ username: user?.username })).password_hash;

  if (pw.compare(oldPassword, oldDBPassword) === false) {
    return res.status(401).json({ success: false, error: 'Old Password wrong' });
  }

  const newHash = pw.hash(newPassword);

  await connectToDatabase();

  await userSchema.updateOne({ username: user?.username }, { password_hash: newHash });

  res.status(200).json({ success: true });
}
