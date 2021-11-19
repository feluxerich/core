import { ObjectId } from 'mongoose';
import { MongooseBase } from './base';

export interface HistoryEntry {
  ip: string | null;
  ua: string | undefined;
  date: number;
}

export interface User extends MongooseBase {
  username: string;
  password_hash: string;
  creation_date: number;
  connections: {
    [name: string]: string;
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
