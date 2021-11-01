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

export interface UserSettings {}
