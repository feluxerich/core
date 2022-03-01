import { basicFetch } from '@utils/fetch';
import QueryString from 'qs';
import _ from 'underscore';

class Coingecko {
  private get baseUrl() {
    return 'https://api.coingecko.com/api/v3';
  }

  private async fetch(route: string, qs: any) {
    return await basicFetch(`${this.baseUrl}/${route}?${QueryString.stringify(qs)}`);
  }

  async currencies(ids: string[]) {
    try {
      const data = await this.fetch('coins/markets', {
        ids: ids.join(','),
        vs_currency: 'usd',

        price_change_percentage: '7d',
      });

      return data;
    } catch (error: any) {
      console.log(error?.message);
      return [];
    }
  }
}

export const coingecko = new Coingecko();
export default coingecko;
