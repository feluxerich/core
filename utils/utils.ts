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