import { FiWind } from 'react-icons/fi';
import { BiDroplet } from 'react-icons/bi';
import { useWeather } from 'hooks/useWeather';

const Weather = () => {
  const weather = useWeather();

  return (
    <div className="flex flex-col items-center p-4 rounded-8 bg-primary-800 text-center col-span-2">
      <span className="text-primary-200 mb-4 leading-none">{weather?.location?.name}</span>
      <span className="font-semibold text-6xl leading-none mb-2">{weather?.current?.temp_c}°</span>
      <span className="text-base mb-5 leading-none">{weather?.current?.condition?.text}</span>
      <div className="px-6 grid grid-flow-row gap-3 text-primary-200 text-left w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="h-3 w-3 mr-2 flex items-center justify-center leading-none">≈</span>

            <span className="text-sm">Feelslike</span>
          </div>
          <span className="text-sm">{weather?.current?.feelslike_c}°</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BiDroplet className="h-3 w-3 mr-2" />
            <span className="text-sm">Hum</span>
          </div>
          <span className="text-sm">{weather?.current?.humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
