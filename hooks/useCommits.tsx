import type { CoreCommit } from '@Types/github';
import { basicFetch } from '@m2vi/iva';
import { useEffect, useState } from 'react';

export const useCommits = () => {
  const [data, setData] = useState<CoreCommit[]>([]);

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
