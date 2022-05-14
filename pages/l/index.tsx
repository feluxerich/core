import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { NextPageWithLayout } from '@components/Layout/LayoutTypes';
import { basicFetch } from '@utils/fetch';
import Link from 'next/link';
import { useState } from 'react';

const Create: NextPageWithLayout = () => {
  const [destination, setDestination] = useState('');
  const [shortened, setShortened] = useState('');

  const create = async (e: any) => {
    e.preventDefault();
    const resp = await basicFetch('/api/shortener', {
      method: 'POST',
      body: JSON.stringify({
        dest: destination,
      }),
    });
    setShortened(`${resp.url}/l/${resp.resp.alias}`);
  };

  return (
    <div className="flex flex-col items-center w-1/4">
      <form className="flex flex-col items-center" onSubmit={create}>
        <Input placeholder="Link Destination" onChange={e => setDestination(e.currentTarget.value)} value={destination} />
        <Button className="mt-5">Create</Button>
      </form>
      {shortened ? (
        <Link href={shortened} passHref>
          <p className="mt-5">{shortened}</p>
        </Link>
      ) : null}
    </div>
  );
};

Create.center = true;

export default Create;
