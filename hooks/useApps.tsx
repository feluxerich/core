import { basicFetch } from '@m2vi/iva';
import { Project } from '@Types/projects';
import { useEffect, useState } from 'react';

export const useApps = () => {
  const [data, setData] = useState<Project[]>([]);

  const fetchData = async () => {
    const data = await basicFetch<any>(`/api/projects/get`);

    return data;
  };

  useEffect(() => {
    fetchData().then(setData).catch(console.error);
  }, []);

  return data;
};
