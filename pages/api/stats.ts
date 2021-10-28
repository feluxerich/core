import type { NextApiRequest, NextApiResponse } from 'next';
import { basicFetch } from '@utils/fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { game, platform, id } = req.query as any;

    if (!(game && platform && id && process.env.TRN_API_KEY)) throw Error('Query param missing');

    const data = await basicFetch(`https://public-api.tracker.gg/v2/${game}/standard/profile/${platform}/${id}`, {
      headers: new Headers({ 'TRN-Api-Key': process.env.TRN_API_KEY }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: (error as any)?.message });
  }
}

// https://tracker.gg/developers/docs/getting-started
