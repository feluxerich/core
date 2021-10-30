import type { NextPage } from 'next';
import Full from '@components/Full';
import Sidebar from '@components/Sidebar';

import Embed from '@components/Embed';

const Home: NextPage = () => {
  return (
    <Full className="flex justify-start">
      <Sidebar />
      <Embed />
    </Full>
  );
};

export default Home;
