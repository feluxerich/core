import linkSchema from '@models/linkSchema';
import mongoose, { FilterQuery } from 'mongoose';
import { DeleteProps, LinkProps } from '@Types/shortener';
import { connectToDatabase } from '@utils/database';

class Database {
  get schema() {
    return linkSchema;
  }

  private async connect() {
    return await connectToDatabase();
  }

  async insert({ link, alias }: LinkProps) {
    const db = await this.connect();

    if (!link || !alias) return { error: 'Missing params' };

    const doc = {
      link,
      alias,
    };

    await db?.collection('shortener').insertOne(doc);

    return doc;
  }

  async exists(query: FilterQuery<LinkProps>): Promise<boolean> {
    await this.connect();

    const data = await database.findOne(query);

    return Boolean(data);
  }

  async delete({ alias }: DeleteProps) {
    await this.connect();

    return await this.schema.deleteOne({ alias });
  }

  async findOne(query: FilterQuery<LinkProps>): Promise<LinkProps> {
    await this.connect();

    const res = await this.schema.findOne(query).lean<LinkProps>();

    return res;
  }

  async findMany(query: FilterQuery<LinkProps>): Promise<LinkProps[]> {
    await this.connect();

    const res = await this.schema.find(query).lean<LinkProps[]>();

    return res;
  }
}

export const database = new Database();
export default database;
