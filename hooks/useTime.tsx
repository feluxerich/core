import { useEffect, useState } from 'react';

export const useTime = () => {
  const [time, setTime] = useState<number>(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
};
