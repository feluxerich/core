import { DeleteProps, EntryProps } from '@Types/todo';
import { connectToDatabase } from '@utils/database';
import todoSchema from '@models/todoSchema';

class Database {
  get schema() {
    return todoSchema;
  }

  private async connect() {
    return await connectToDatabase();
  }

  async insert({ title, alias }: any) {
    const db = await this.connect();

    if (!title || !alias) return { error: 'Missing params' };

    const doc = {
      title,
      alias,
    };

    await db?.collection('todo').insertOne(doc);

    return doc;
  }

  async exists(alias: string): Promise<boolean> {
    await this.connect();

    const data = await database.findOne(alias);

    return Boolean(data);
  }

  async delete({ alias }: DeleteProps) {
    await this.connect();

    return await this.schema.deleteOne({ alias });
  }

  async findOne(alias: string) {
    await this.connect();

    const res = await this.schema.findOne({ alias });

    return res;
  }

  async appendEntries(alias: string, entry: EntryProps) {
    await this.schema.updateOne({ alias }, { $push: { todoEntries: entry } });
    return await this.findOne(alias);
  }

  async check(alias: string, content: string) {
    const todo = await this.findOne(alias);

    const todoEntry = todo.todoEntries.find((element: any) => element.content === content);
    if (todoEntry.checked) {
      await this.schema.updateOne({ alias, 'todoEntries.content': content }, { $set: { 'todoEntries.$.checked': false } });
      return await this.findOne(alias);
    }
    await this.schema.updateOne({ alias, 'todoEntries.content': content }, { $set: { 'todoEntries.$.checked': true } });
    return await this.findOne(alias);
  }
}

export const database = new Database();
export default database;
