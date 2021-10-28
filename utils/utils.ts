import userSchema from '@models/userSchema';
import { connectToDatabase } from '@utils/database';
import jwt from 'jsonwebtoken';

export const aspectRatio = (width: number, height: number) => {
  const r = gcd(width, height);

  return [width / r, height / r];
};

export const gcd = (a: number, b: number): number => {
  return b == 0 ? a : gcd(b, a % b);
};

export const checkJwtToken = async (token: string) => {
  if (!token) {
    return false;
  }

  await connectToDatabase();

  const decoded = JSON.parse(jwt.verify(token, process.env.JWT_SECRET_KEY || 'please change me') as string);
  var user = await userSchema.findOne({ username: decoded.username });

  if (user.length == 0 || decoded.password_hash !== user.password_hash) {
    return false;
  }

  return user;
};
