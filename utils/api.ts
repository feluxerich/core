import userSchema from '@models/userSchema';
import { JwtUser, User } from '@Types/user';
import { Connection, FilterQuery } from 'mongoose';
import { connectToDatabase } from './database';
import { baseUrl, basicFetch } from './fetch';
import { getClientIp } from 'request-ip';
import { NextApiRequest } from 'next';
import jwt from 'jsonwebtoken';

export class Discord {
  async get(id: string) {
    return basicFetch(`https://api.m2vi.me/discord/${id}`);
  }

  async exists(id: string) {
    const user = await this.get(id);

    return user?.id === id;
  }

  async avatar(id: string) {
    const user = await this.get(id);

    return user?.avatar?.url;
  }
}

export const discord = new Discord();

export class Ip {
  async get(req?: NextApiRequest) {
    if (req) {
      return getClientIp(req);
    } else {
      return (await basicFetch('/api/ip'))?.ip;
    }
  }

  async lookup(req: NextApiRequest) {
    return await basicFetch(`${baseUrl(req)}/api/ip/${getClientIp(req)}`);
  }
}

export const ipClient = new Ip();

export class Core {
  ip: Ip;

  constructor() {
    this.ip = new Ip();
  }

  async init(): Promise<Connection | undefined> {
    return await connectToDatabase();
  }

  async find(filter: FilterQuery<User>): Promise<User[]> {
    await this.init();
    const items = await userSchema.find(filter).lean<any>();

    return items;
  }

  async findOne(filter: FilterQuery<User>): Promise<User> {
    await this.init();
    const item = await userSchema.findOne(filter).lean();

    return item;
  }

  async exists(username: string): Promise<boolean> {
    const item = await this.findOne({ username });

    return item ? true : false;
  }

  async updateAfterLogin(username: string, req: NextApiRequest) {
    await this.init();
    let history = (await this.findOne({ username })).history;
    history = history && Array.isArray(history) ? history : [];
    return await userSchema.updateOne({ username }, { $set: { history: history.concat(this.getHistoryEntry(req)) } });
  }

  getHistoryEntry(req: NextApiRequest) {
    return { ip: getClientIp(req), ua: req.headers['user-agent'], date: Date.now() };
  }

  config(req: NextApiRequest | any): JwtUser | null {
    const cookie = req.cookies.jwt;
    if (!cookie) return null;

    const decoded: any = jwt.decode(cookie);

    return decoded;
  }
}

export const core = new Core();
