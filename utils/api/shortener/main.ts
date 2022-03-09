import { FilterQuery } from 'mongoose';
import validator from 'validator';
import alias, { Alias } from './alias';
import database from './db';
import { ValidateInputProps, LinkProps, DeleteProps, GetProps, InsertProps } from '@Types/shortener';

class Shortener {
  alias: Alias;
  constructor() {
    this.alias = alias;
  }

  private validateInput(input: any): ValidateInputProps {
    const { link, alias } = Object.freeze(input);

    if (link?.length > 2048) {
      return {
        valid: false,
        error: 'Maximum url length exceeded',
        code: 413,
      };
    }

    if (alias?.length > 512) {
      return {
        valid: false,
        error: 'Maximum alias length exceeded',
        code: 413,
      };
    }

    if (!validator.isURL(link, { protocols: ['http', 'https'] })) {
      return {
        valid: false,
        error: 'Link parameter is not valid',
        code: 400,
      };
    }

    if (alias && !alias?.match(new RegExp(`[a-zA-Z0-9\-_]`))) {
      return {
        valid: false,
        error: 'Alias is malformed',
        code: 400,
      };
    }

    return {
      valid: true,
      error: null,
      code: 200,
    };
  }

  async insert(input: InsertProps) {
    try {
      const { valid, error, code } = this.validateInput(input);
      if (!valid) return { error, code };

      if (!input?.alias) {
        const exists = await database.exists({ link: input?.link, custom: false });
        if (exists) return await database.findOne({ link: input?.link, custom: false });
      }

      return await database.insert({ link: input?.link, alias: this.alias.createAlias(input?.alias), custom: Boolean(input?.alias) });
    } catch (error) {
      return { error: 'Alias already exists', code: 400 };
    }
  }

  async delete(input: DeleteProps) {
    return await database.delete(input);
  }

  async get(input: GetProps) {
    try {
      const frozen = Object.freeze(input);

      const data = await database.findOne(frozen);

      if (!data) throw Error('Alias was not found');

      return { link: data?.link, alias: data?.alias };
    } catch (error) {
      return { error: 'Alias was not found', code: 404 };
    }
  }

  async getMany(input: FilterQuery<LinkProps>) {
    try {
      const data = await database.findMany(input);

      if (!data) throw Error('Query was not found');

      return data;
    } catch (error) {
      return { error: 'Database error', code: 500 };
    }
  }
}

export const shortener = new Shortener();
export default shortener;
