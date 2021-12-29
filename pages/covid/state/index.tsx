import { baseUrl, basicFetch } from '@utils/fetch';
import { useState } from 'react';
import { LineChart } from '@components/LineChart';
import type { NextPage } from 'next';

const State: NextPage = ({ history }: any) => {
  const [input, setInput] = useState('');

  const handleChange = (e: any) => {
    setInput(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-1/2 max-h-full transition-all h-4/5">
      <div className="flex items-center justify-center w-full max-w-sm py-2 mb-10 border-b border-primary-600 h-1/5">
        <input
          className="w-full px-2 py-1 mr-3 leading-tight bg-transparent border-none appearance-none primary-900"
          type="text"
          placeholder="State"
          aria-label="State"
          value={input}
          onChange={handleChange}
        />
      </div>
      <div className="grid w-full grid-cols-1 gap-2 h-3/5">
        {Object.values(history).map((element: any) => {
          if (element.name.toLowerCase().includes(input.toLowerCase().replaceAll(' ', '-')) || !input) {
            return (
              <div className="flex flex-col w-full gap-2 p-5 border border-primary-600 bg-primary-800 rounded-8" key={element.name}>
                <div className="flex flex-row items-center w-full">
                  <span className="text-5xl font-extrabold text-left">{element.name}</span>
                  <span className="ml-auto text-3xl text-gray-700">{Math.round(element.history.at(-1).weekIncidence * 1000) / 1000}</span>
                </div>
                <LineChart
                  noBox={true}
                  legend={false}
                  datasets={[
                    {
                      data: Object.values(element.history).map((e: any) => e.weekIncidence),
                      label: 'Incidence',
                      borderColor: 'rgba(123, 154, 38, 0.3)',
                      backgroundColor: 'rgba(123, 154, 38, 0.1)',
                    },
                  ]}
                  labels={Object.values(element.history).map((e: any) => e.date.split('T')[0])}
                  className="w-full h-full"
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default State;

export const getServerSideProps = async ({ req }: any) => {
  return {
    props: {
      history: await basicFetch(`${baseUrl(req)}/api/covid/state/history`),
    },
  };
};
