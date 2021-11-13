import type { NextPage } from 'next';
import { baseUrl, basicFetch } from '@utils/fetch';
import Link from 'next/link';
import { ReactElement } from 'react';
import { Layout } from '@components/Layout';
import { LineChart } from '@components/LineChart';
import { TextCard } from '@components/TextCard';

const Germany: any = ({ history, now }: any) => {
  var dates: any = [];

  var incidence: any = [];
  var deaths: any = [];
  var cases: any = [];
  var recovered: any = [];

  history?.incidence.map((obj: any) => {
    incidence.push(obj.weekIncidence);
    dates.push(obj.date.split('T')[0]);
  });

  history?.deaths.map((obj: any) => {
    deaths.push(obj.deaths);
  });

  history?.cases.map((obj: any) => {
    cases.push(obj.cases);
  });

  history?.recovered.map((obj: any) => {
    recovered.push(obj.recovered);
  });

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="grid w-1/2 grid-cols-3 gap-2 mb-10">
        <TextCard heading="Cases" text={now.cases} />
        <TextCard heading="Deaths" text={now.deaths} />
        <TextCard heading="Recovered" text={now.recovered} />
        <TextCard heading="Incidence" text={now.weekIncidence} />
        <TextCard heading="Delta Cases" text={now.delta.cases} />
        <TextCard heading="Delta Deaths" text={now.delta.deaths} />
      </div>
      <div className="grid w-1/2 grid-cols-2 gap-2 h-1/2">
        <LineChart
          datasets={[
            {
              data: incidence,
              label: 'Week Incidence',
              borderColor: 'hsl(240, 24%, 30%)',
              backgroundColor: 'hsl(240, 24%, 10%)',
            },
          ]}
          labels={dates}
          className="w-full h-full"
        />
        <LineChart
          datasets={[
            {
              data: deaths,
              label: 'New Deaths',
              borderColor: 'rgba(172, 138, 138, 0.3)',
              backgroundColor: 'rgba(172, 138, 138, 0.1)',
            },
          ]}
          labels={dates}
          className="w-full h-full"
        />
        <LineChart
          datasets={[
            {
              data: cases,
              label: 'All Cases',
              borderColor: 'rgba(123, 154, 38, 0.3)',
              backgroundColor: 'rgba(123, 154, 38, 0.1)',
            },
          ]}
          labels={dates}
          className="w-full h-full"
        />
        <LineChart
          datasets={[
            {
              data: recovered,
              label: 'Recovered',
              borderColor: 'rgba(123, 200, 195, 0.3)',
              backgroundColor: 'rgba(123, 200, 195, 0.1)',
            },
          ]}
          labels={dates}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Germany;

export const getServerSideProps = async ({ req }: any) => {
  return {
    props: {
      history: await basicFetch(`${baseUrl(req)}/api/covid/germany/history`),
      now: await basicFetch(`${baseUrl(req)}/api/covid/germany/now`),
    },
  };
};

Germany.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <div className="fixed top-0 w-full">
        <div className="flex flex-row items-center justify-center w-full p-2 mb-6">
          <Link href="/covid/germany" passHref>
            <div className="p-2 m-2 cursor-pointer hover:bg-primary-700 rounded-5">Germany</div>
          </Link>
          <Link href="/covid/state" passHref>
            <div className="p-2 m-2 cursor-pointer hover:bg-primary-700 rounded-5">State</div>
          </Link>
          <Link href="/covid/district" passHref>
            <div className="p-2 m-2 cursor-pointer hover:bg-primary-700 rounded-5">District</div>
          </Link>
        </div>
      </div>
      {page}
    </Layout>
  );
};
