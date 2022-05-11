import { baseUrl, basicFetch } from '@m2vi/iva';
import type { NextApiRequest, NextApiResponse } from 'next';
import cache from 'memory-cache';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const reset = new Object(req.query).hasOwnProperty('reset');

    if (!reset && cache.get('css')) {
      res.setHeader('access-control-allow-origin', '*');
      res.setHeader('content-type', 'text/css');
      res.send(cache.get('css'));
      return;
    }

    const b = baseUrl(req);
    const files = ['/styles/globals.css', '/styles/colors.css', '/styles/components.css', '/styles/animations.css'];

    const data = (await Promise.all(files.map(async route => await basicFetch(`${b}${route}`, 'text')))).join('\n');

    cache.put('css', data);

    res.setHeader('access-control-allow-origin', '*');
    res.setHeader('content-type', 'text/css');
    res.send(data);
  } catch (error: any) {
    res.status(500).json({ error: error?.message });
  }
}
