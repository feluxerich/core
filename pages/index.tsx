import type { NextPage } from 'next';
import Full from '@components/Full';
import Sidebar from '@components/Sidebar';

const Home: NextPage = () => {
  return (
    <Full className="flex justify-start">
      <Sidebar />
    </Full>
  );
};

export default Home;
