import { TableProps } from '@Types/timezone';
import tz from '@utils/api/timezone/main';

import Head from 'next/head';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '@components/Button';
import Time from '@components/pages/tz/Time';
import client from '@utils/api/timezone/client';
import Title from '@components/Title';

const Page = () => {
  const [data, setData] = useState<TableProps[]>([]);

  useEffect(() => {
    client.table().then(setData);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value;
    if (!query) {
      client.table().then(setData);
    } else {
      client.search(query).then(setData);
    }
  };

  return (
    <>
      <Title>Timezones</Title>

      <Link href="/tz">
        <a>
          <Button className="fixed bottom-5 right-5" size="small">
            Home
          </Button>
        </a>
      </Link>
      <div className="max-w-7xl w-full h-full px-11 py-100 border-collapse mx-auto">
        <div className="bg-primary-900 p-2 px-4 border border-primary-600 border-b-0 w-full flex items-center">
          <input onChange={handleChange} className="w-full bg-primary-900 placeholder:text-primary-300" placeholder="Search for Name, Timezone" />
        </div>

        <table className="w-full border border-primary-600 bg-primary-900">
          <thead>
            <tr className="text-left border border-primary-600">
              <th className="p-2 border border-primary-600">Name</th>
              <th className="p-2 border border-primary-600">Timezone</th>
              <th className="p-2 border border-primary-600">UTC offset (minutes)</th>
              <th className="p-2 border border-primary-600">Time</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(({ name, timezone, offset }, i) => {
              return (
                <tr key={i}>
                  <td className="p-2 border border-primary-600">{timezone}</td>
                  <td className="p-2 border border-primary-600">{name}</td>
                  <td className="p-2 border border-primary-600">{tz.moment.duration(offset, 'minutes').format('m')}</td>
                  <td className="p-2 border border-primary-600 w-100">
                    <Time timezone={timezone} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Page;
