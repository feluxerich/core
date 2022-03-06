import tz from '@utils/api/timezone/main';
import { useEffect, useState } from 'react';

const Time = ({ timezone }: { timezone: string }) => {
  const [time, setTime] = useState('00:00:00');
  const format = 'HH:mm:ss';

  useEffect(() => {
    setTime(tz.moment.tz(timezone).format(format));
    const interval = setInterval(() => {
      setTime(tz.moment.tz(timezone).format(format));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);
  return <>{time}</>;
};

export default Time;
