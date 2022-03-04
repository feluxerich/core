import CryptoMarketPrice from './collection/CryptoMarketPrice';
import Weather from './collection/Weather';
import Wrapper from './Wrapper';

const Widgets = () => {
  return (
    <Wrapper>
      <Weather />
      <CryptoMarketPrice currency="bitcoin" />
      <CryptoMarketPrice currency="ethereum" />
      <CryptoMarketPrice currency="dogecoin" />
    </Wrapper>
  );
};

export default Widgets;
