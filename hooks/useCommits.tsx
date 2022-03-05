import { basicFetch } from '@m2vi/iva';
import { Commits } from '@Types/core';
import { useEffect, useState } from 'react';

export const useCommits = () => {
  const [data, setData] = useState<Commits>([]);

  const fetchData = async () => {
    const data = await basicFetch<any>(`/api/core/commits`);

    return data?.data ? data?.data : [];
  };

  useEffect(() => {
    fetchData().then(setData).catch(console.log);
    const interval = setInterval(() => {
      fetchData().then(setData).catch(console.log);
    }, 600000);
    return () => clearInterval(interval);
  }, []);

  return data;
};
