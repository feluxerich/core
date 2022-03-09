import { BiDroplet } from 'react-icons/bi';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { basicFetch } from '@m2vi/iva';

const Weather = () => {
  const query = useQuery(
    'weather',
    async () => {
      const data = await basicFetch<any>('/api/weather');

      return data;
    },
    { refetchOnWindowFocus: true, refetchInterval: 15000 },
  );

  return (
    <div className="flex flex-col items-center p-4 rounded-8 bg-primary-800 text-center col-span-2">
      <span className="text-primary-200 mb-4 leading-none">{query?.data?.location?.name}</span>
      <span className="font-semibold text-6xl leading-none mb-2">{query?.data?.current?.temp_c}°</span>
      <span className="text-base mb-5 leading-none">{query?.data?.current?.condition?.text}</span>
      <div className="px-6 grid grid-flow-row gap-3 text-primary-200 text-left w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="h-3 w-3 mr-2 flex items-center justify-center leading-none">≈</span>

            <span className="text-sm">Feelslike</span>
          </div>
          <span className="text-sm">{query?.data?.current?.feelslike_c}°</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BiDroplet className="h-3 w-3 mr-2" />
            <span className="text-sm">Hum</span>
          </div>
          <span className="text-sm">{query?.data?.current?.humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
