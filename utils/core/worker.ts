import { NextApiRequest } from 'next';
import jwt from '@tsndr/cloudflare-worker-jwt';
import type { NextRequest } from 'next/server';
import { UserJwtPayload } from '@Types/base';

export const verifyAuth = async (req: NextApiRequest | NextRequest) => {
  const token = req.cookies.jwt;

  if (!token) {
    return [false, 'Missing user token', null];
  }

  try {
    if (!(await jwt.verify(token, process.env.JWT_SECRET_KEY!))) {
      return [false, 'Your token has expired.', null];
    }
  } catch (error) {
    return [false, (error as any).message, null];
  }

  return [true, null, jwt.decode(token) as UserJwtPayload];
};
