import Full from '@components/Full';
import Apps from '@components/pages/Dashboard/Apps';
import Aside from '@components/pages/Dashboard/Aside';
import Widgets from '@components/widgets/main';

const Dashboard = () => {
  return (
    <Full className="flex items-start justify-between">
      <Widgets />
      <Apps />
      <Aside />
    </Full>
  );
};

export default Dashboard;
