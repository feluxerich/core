import { basicFetch } from '@m2vi/iva';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getClientIp } from 'request-ip';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req?.query?.query ? req?.query?.query : getClientIp(req) !== '::1' ? getClientIp(req) : 'Vienna';
  const { WEATHER_API_KEY } = process.env;

  const data = await basicFetch<any>(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${query}&aqi=no`);

  res.status(200).json(data);
}
