import Apps from '@components/pages/Dashboard/Apps';
import Aside from '@components/pages/Dashboard/Aside';
import Widgets from '@components/widgets/main';

const Dashboard = () => {
  return (
    <div className="flex items-start justify-between w-full h-full pt-11">
      <Widgets />
      <Apps />
      <Aside />
    </div>
  );
};

export default Dashboard;
