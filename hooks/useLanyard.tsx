import { basicFetch } from '@m2vi/iva';
import { PresenceB } from '@Types/lanyard';
import QueryString from 'qs';
import { useEffect, useState } from 'react';

export const useLanyard = (id: string) => {
  const [data, setData] = useState<PresenceB | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return null;
      const data = await basicFetch<any>(`/api/lanyard/rest?${QueryString.stringify({ id })}`);

      if (data?.error) return null;

      return data;
    };

    fetchData().then(setData).catch(console.log);
    const interval = setInterval(() => {
      fetchData().then(setData).catch(console.log);
    }, 5000);
    return () => clearInterval(interval);
  }, [id]);

  return data;
};
