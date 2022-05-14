import { GetServerSideProps } from 'next';
import Full from '@components/Full';
import { Spinner } from '@components/Spinner';
import shortener from '@utils/api/shortener/main';
import { NextPageWithLayout } from '@components/Layout/LayoutTypes';

const Alias: NextPageWithLayout = () => {
  return (
    <Full className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Spinner size="6" />
        <p className="mt-3 text-sm">Redirecting...</p>
      </div>
    </Full>
  );
};

Alias.center = true;

export default Alias;

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const data = await shortener.get({ alias: context?.query?.alias?.toString()! });

    if (data?.error || !data?.link) {
      return {
        props: {
          error: 'Not found',
        },
      };
    }

    return {
      redirect: {
        statusCode: 308,
        destination: data.link,
      },
    };
  } catch (error: any) {
    return {
      props: {
        error: JSON.stringify(error?.message),
      },
    };
  }
};
