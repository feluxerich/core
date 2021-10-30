import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import validator from 'validator';

const Embed = () => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(null as any);
  const [error, setError] = useState(null as any);
  const Router = useRouter();

  useEffect(() => {
    if (!Router.query.url) return;
    if (!validator.isURL(Router.query.url as string)) return setError('Url is not valid');

    const url = decodeURIComponent(Router.query.url as string);
    const obj = new URL(url);

    if (obj.protocol !== 'https:') return setError('Content must be served over HTTPS');

    setUrl(url);
  }, [Router]);

  return (
    <div className="h-screen w-full relative">
      {!error ? (
        <>
          {loading && (
            <div className="h-screen w-full absolute inset-0 bg-primary-900 grid place-items-center">
              <Spinner />
            </div>
          )}
          {url && <embed src={url} className="w-full h-screen" onLoad={e => setLoading(false)} />}
        </>
      ) : (
        <div className="h-screen w-full absolute inset-0 bg-primary-900 grid place-items-center">{error}</div>
      )}
    </div>
  );
};

export default Embed;
