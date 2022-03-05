import Full from '@components/Full';
import SmallLogo from '@assets/svg/small_logo.svg';

const Loading = () => {
  return (
    <Full className="grid place-items-center">
      <SmallLogo className="mb-4" />
    </Full>
  );
};

Loading.noLayout = true;

export default Loading;
