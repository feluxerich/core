import { ObjectId } from 'mongoose';
import { MongooseBase } from './base';

export interface HistoryEntry {
  ip: string | null;
  ua: string | undefined;
  date: number;
}

export interface User extends MongooseBase {
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
  history: Array<HistoryEntry>;
}

export interface JwtUser extends JwtBase {
  uuid: string;
  username: string;
  avatar: string;
  ip: string;
  last_login: number;
}
