import userSchema from '@models/userSchema';
import { connectToDatabase } from './database';
import { basicFetch } from './fetch';

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

export class Core {
  async init() {
    await connectToDatabase();
  }

  async get(username: string) {
    await this.init();
    const item = await userSchema.findOne({ username });

    return item;
  }

  async exists(username: string) {
    const item = await this.get(username);

    return item ? true : false;
  }
}

export const core = new Core();
