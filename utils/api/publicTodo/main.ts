import { DeleteProps } from '@Types/shortener';
import { EntryProps, InsertProps } from '@Types/todo';
import alias, { Alias } from '../shortener/alias';
import database from './db';

class Todo {
  alias: Alias;
  constructor() {
    this.alias = alias;
  }

  async insert(input: InsertProps) {
    var alias = this.alias.createAlias();
    var exists = await database.exists(alias);

    while (exists) {
      alias = this.alias.createAlias();
      var exists = await database.exists(alias);
    }

    return await database.insert({ title: input.title, alias });
  }

  async delete(alias: DeleteProps) {
    return await database.delete(alias);
  }

  async appendEntries(alias: string, entry: EntryProps) {
    return await database.appendEntries(alias, entry);
  }

  async get(alias: string) {
    const data = await database.findOne(alias);

    if (!data) return console.error('Alias not found');

    return { title: data?.title, alias: data?.alias, todoEntries: data?.todoEntries };
  }

  async check(alias: string, content: string) {
    return await database.check(alias, content);
  }
}

export const publicTodo = new Todo();
export default publicTodo;
