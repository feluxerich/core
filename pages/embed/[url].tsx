import type { NextPage } from 'next';
import Full from '@components/Full';
import Sidebar from '@components/Sidebar';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { Spinner } from '@components/Spinner';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const Router = useRouter();
  const url = decodeURIComponent(Router.query.url as string);

  return (
    <Full className="flex justify-start">
      <Sidebar />
      <div className="h-screen w-full relative">
        {loading && (
          <div className="h-screen w-full absolute inset-0 bg-primary-900 grid place-items-center">
            <Spinner />
          </div>
        )}
        <embed src={url} className="w-full h-screen" onLoad={e => setLoading(false)} />
      </div>
    </Full>
  );
};

export default Home;
