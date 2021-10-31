import jwt from '@tsndr/cloudflare-worker-jwt';
import { NextRequest } from 'next/server';

export const aspectRatio = (width: number, height: number) => {
  const r = gcd(width, height);

  return [width / r, height / r];
};

export const gcd = (a: number, b: number): number => {
  return b == 0 ? a : gcd(b, a % b);
};

interface UserJwtPayload {
  jti: string;
  iat: number;
}

export async function verifyAuth(req: NextRequest) {
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
}
