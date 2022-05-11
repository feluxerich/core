import { ObjectId } from 'mongoose';
import { MongooseBase, ObjectBase } from './base';

export interface User extends MongooseBase {
  username: string;
  password_hash: string;
  creation_date: number;
  connections: ObjectBase<string>;
}

export interface JwtUser extends JwtBase {
  uuid: string;
  username: string;
  avatar: string;
  ip: string;
  last_login: number;
}
