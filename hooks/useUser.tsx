import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { useEffect, useState } from 'react';

export const useUser = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const cookie = Cookies.get('jwt');
    if (!cookie) return;
    const decoded = jwt.decode(cookie);
    setData(decoded);
  }, []);

  return data;
};
