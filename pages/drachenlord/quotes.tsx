import { Button } from '@components/Button';
import Full from '@components/Full';
import { basicFetch } from '@m2vi/iva';
import { useQuery } from 'react-query';

const Page = () => {
  const { data, refetch } = useQuery(
    'drachenlord-quotes',
    async () => {
      return basicFetch<any>('/api/drachenlord/quote', 'text');
    },
    { enabled: false },
  );

  return (
    <Full className="flex justify-center items-center">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <span className="w-full" style={{ aspectRatio: '10 / 2' }}>
          {data}
        </span>
        <Button className="select-none mt-4" onClick={() => refetch()}>
          Refetch
        </Button>
      </div>
    </Full>
  );
};

Page.center = true;

export default Page;
