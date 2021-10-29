import type { NextApiRequest, NextApiResponse } from 'next';
import { basicFetch } from '@utils/fetch';

type Data = {
  ip?: string;
  error?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const data = await basicFetch('https://api.m2vi.me/ip');

    res.status(200).json(data);
  } catch ({ error }) {
    res.status(500).json({ error });
  }
}
