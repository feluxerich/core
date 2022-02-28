import { basicFetch } from '@m2vi/iva';
import { LanyardResponse } from '@Types/lanyard';
import type { NextApiRequest, NextApiResponse } from 'next';
import _ from 'underscore';
import config from '@data/lanyard.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id, ...props } = Object.freeze(req.query);

    const extended = _.has(props, 'extended');

    const data = await basicFetch<LanyardResponse>(`https://api.lanyard.rest/v1/users/${id}`);
    if (typeof data === 'string') throw Error('???');
    if (!data?.success) throw Error(data?.error?.message);

    if (extended) return res.status(200).json(data?.data);

    const result = {
      status: data?.data?.discord_status,
      activities: {
        listening: Boolean(data?.data?.listening_to_spotify),
        working: Boolean(data?.data?.activities?.filter(({ name, type }) => config.groups.working.includes(name) && type !== 2).length),
        gaming: Boolean(data?.data?.activities?.filter(({ name, type }) => !config.groups.working.includes(name) && type !== 2).length),
      },
    };

    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error?.message });
  }
}
