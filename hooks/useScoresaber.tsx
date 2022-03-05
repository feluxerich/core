import { basicFetch } from '@m2vi/iva';
import { useEffect, useState } from 'react';

export const useScoreaber = (id: string) => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const data = await basicFetch<any>(`/api/scoresaber/${id}`);

    return data;
  };

  useEffect(() => {
    if (!id) return;
    fetchData().then(setData).catch(console.log);
    const interval = setInterval(() => {
      fetchData().then(setData).catch(console.log);
    }, 30000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return data;
};
