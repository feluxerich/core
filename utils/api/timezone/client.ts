import QueryString from 'qs';

class Client {
  private async fetch(url: string) {
    return await (await fetch(url)).json();
  }

  async table() {
    return this.fetch('/api/tz/table');
  }

  async search(query: string) {
    return this.fetch(`/api/tz/table?${QueryString.stringify({ q: query })}`);
  }
}

const client = new Client();
export default client;
