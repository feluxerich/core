import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import Box from '@components/pages/tz/Box';
import { Button } from '@components/Button';
import Head from 'next/head';
import tz from '@utils/api/timezone/main';
import Full from '@components/Full';
import Title from '@components/Title';

const Home = ({ timezones }: any) => {
  return (
    <>
      <Title>Timezones</Title>

      <Link href="/tz/table">
        <a>
          <Button className="fixed bottom-5 right-5" size="small">
            Table
          </Button>
        </a>
      </Link>
      <Full className="grid place-items-center">
        <Box timezones={timezones} />
      </Full>
    </>
  );
};

Home.center = true;

export default Home;

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      timezones: tz.boxTimezones(),
    },
  };
};
