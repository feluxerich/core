import userSchema from '@models/userSchema';
import { User } from '@Types/user';
import { Connection, FilterQuery } from 'mongoose';
import { connectToDatabase } from './database';
import { basicFetch } from './fetch';
import { getClientIp } from 'request-ip';
import { NextApiRequest } from 'next';

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

class Ip {
  async get(req?: NextApiRequest) {
    if (req) {
      return getClientIp(req);
    } else {
      return (await basicFetch('/api/ip'))?.ip;
    }
  }
}

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
    return await userSchema.updateOne({ username }, { $set: { 'extra.ip': getClientIp(req), 'extra.last_login': Date.now() } });
  }
}

export const core = new Core();
