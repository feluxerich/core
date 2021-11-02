import { ObjectId } from 'mongoose';

export interface User {
  _id: ObjectId;
  uuid: string;
  mail: string;
  username: string;
  password_hash: string;
  extra: {
    ip: string;
    discord: string;
    first_login: number;
    last_login: number;
  };
}

export interface JwtUser {
  uuid: string;
  username: string;
  avatar: string;
  ip: string;
  last_login: number;
  iat: number;
  exp: number;
}

interface UserJwtPayload {
  jti: string;
  iat: number;
}
