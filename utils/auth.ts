import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import { jsonResponse } from './fetch';

export const verify = (token: string) => {
  try {
    return [jwt.verify(token, process.env.JWT_SECRET_KEY || 'please change me') ? true : false];
  } catch (error) {
    return [false, (error as any)?.message];
  }
};

export const isLoggedIn = (req: NextRequest) => {
  const cookie = req?.cookies?.jwt;

  const [valid, error] = verify(cookie);
  console.log(valid, error);
  return false;
};

interface UserJwtPayload {
  jti: string;
  iat: number;
}

export function verifyAuth(req: NextRequest) {
  const token = req.cookies.jwt;

  if (!token) {
    return jsonResponse(401, { error: { message: 'Missing user token' } });
  }

  if (!jwt.verify(token, process.env.JWT_SECRET || 'change me pls')) {
    return jsonResponse(401, { error: { message: 'Your token has expired.' } });
  }

  return jwt.decode(token) as UserJwtPayload;
}
