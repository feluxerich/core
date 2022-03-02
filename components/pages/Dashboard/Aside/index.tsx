import Commits from '@components/pages/Dashboard/Aside/Commits';
import User from '@components/pages/Dashboard/Aside/User';

const Aside = () => {
  return (
    <div className="grid w-full grid-flow-row gap-6 mr-0 max-w-screen-fsm">
      <User />
      <Commits />
    </div>
  );
};

export default Aside;
