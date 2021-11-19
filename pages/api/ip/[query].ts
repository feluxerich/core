import type { NextApiRequest, NextApiResponse } from 'next';
import { basicFetch } from '@utils/fetch';

type Data = {
  query?: string;
  allowed?: boolean;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const ip = req?.query?.query;
    const data = await basicFetch(`https://api.m2vi.me/ip/${ip}`);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: (error as any)?.message,
    });
  }
}
