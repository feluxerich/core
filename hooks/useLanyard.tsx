import { basicFetch } from '@m2vi/iva';
import { PresenceB } from '@Types/lanyard';
import QueryString from 'qs';
import { useEffect, useState } from 'react';

export const useLanyard = (id: string) => {
  const [data, setData] = useState<PresenceB | null>(null);

  const fetchData = async () => {
    const data = await basicFetch<any>(`/api/lanyard/rest?${QueryString.stringify({ id })}`);

    if (data?.error) return null;

    return data;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData().then(setData).catch(console.log);
    }, 5000);
    return () => clearInterval(interval);
  });

  return data;
};
