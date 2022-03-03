import CryptoMarketPrice from './collection/CryptoMarketPrice';
import Weather from './collection/Weather';

const Widgets = () => {
  return (
    <div className="w-full mr-8 max-w-screen-fxs">
      <div className="flex items-center mb-5">
        <span className="text-xl font-bold">
          Widgets <span className="text-sm font-bold text-primary-300">(1)</span>
        </span>
      </div>
      <div className="w-full grid grid-flow-row gap-5">
        <Weather />
        <CryptoMarketPrice currency="bitcoin" />
        <CryptoMarketPrice currency="ethereum" />
        <CryptoMarketPrice currency="dogecoin" />
      </div>
    </div>
  );
};

export default Widgets;
