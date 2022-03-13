import { basicFetch } from '@m2vi/iva';
import { CryptoMarketPriceProps } from '@Types/widgets';
import { withPrefix } from '@utils/utils';
import Image from 'next/image';
import QueryString from 'qs';
import { useQuery } from 'react-query';

const CryptoMarketPrice = ({ currency }: CryptoMarketPriceProps) => {
  const { data } = useQuery(
    `cmp-${currency}`,
    async (): Promise<any> => {
      const data = await basicFetch(`/api/coingecko?${QueryString.stringify({ ids: currency })}`);
      currency;
      return data;
    },
    { refetchInterval: 30000, refetchOnWindowFocus: true },
  );

  const item = data?.[0];

  return (
    <div className="flex items-center justify-between bg-primary-800 px-4 py-3 rounded-8 col-span-2">
      <div className="flex items-center h-full">
        <div className="h-6 w-6 rounded overflow-hidden bg-primary-700 mr-2">
          {item?.image ? <Image src={item?.image} alt=" " height={30} width={30} /> : null}
        </div>
        <div className="flex flex-col justify-between h-full">
          <span className="font-semibold text-sm">{item?.name}</span>
          <span className="text-primary-200 text-xs">{withPrefix(item?.price_change_percentage_24h?.toFixed(2))}%</span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end text-right h-full">
        <span className="text-primary-200 text-xs">€{item?.current_price}</span>
        <span className="text-primary-300 text-xs">#{item?.market_cap_rank}</span>
      </div>
    </div>
  );
};

export default CryptoMarketPrice;
