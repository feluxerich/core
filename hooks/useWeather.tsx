import { basicFetch } from '@m2vi/iva';
import { PresenceB } from '@Types/lanyard';
import { WeatherResponse } from '@Types/weather';
import { useEffect, useState } from 'react';

export const useWeather = () => {
  const [data, setData] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await basicFetch<any>('/api/weather');

      if (data?.error) return null;

      return data;
    };

    fetchData().then(setData).catch(console.log);
    const interval = setInterval(() => {
      fetchData().then(setData).catch(console.log);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return data;
};
