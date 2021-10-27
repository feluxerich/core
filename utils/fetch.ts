import { isProduction } from './env';
import cache from 'memory-cache';

export const fetchWithCache = async (url: string, minutes: number = 30) => {
  const value = cache.get(url);
  if (value && isProduction) {
    return value;
  } else {
    const data = await basicFetch(url);
    cache.put(url, data, 1000 * 60 * minutes);
    return data;
  }
};

export const basicFetch = async (input: RequestInfo, init?: RequestInit) => {
  return await (await fetch(input, init)).json();
};

export const baseUrl = (req: any) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = req ? `${protocol}://${req.headers.host}` : '';

  return baseUrl;
};
