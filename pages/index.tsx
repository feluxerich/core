import Commits from '@components/Commits';
import User from '@components/User';
import { useApps } from 'hooks/useApps';

const Home = () => {
  const apps = useApps();

  return (
    <div className="flex items-start justify-between w-full h-full pt-11">
      <div className="w-full mr-8 max-w-screen-fxs"></div>
      <div className="flex flex-col w-full mr-8 max-w-screen-fmd">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">Apps</span>
          <span className="text-sm font-semibold text-primary-300">{apps.length}</span>
        </div>
        <div className="grid w-full grid-flow-col mt-5">
          {apps.map(({ id, key, name, route, desc, tags, language, repository, owner }) => {
            return (
              <div className="flex flex-col w-full p-4 bg-primary-800 rounded-8" key={id}>
                <div className="flex mb-2">
                  <span className="text-sm font-bold text-primary-300">{owner}/</span>
                  <span className="text-sm font-bold text-primary-100">{key}</span>
                </div>
                <span className="mb-4 text-sm text-primary-300">{desc}</span>
                <div className="flex"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid w-full grid-flow-row gap-6 mr-0 max-w-screen-fsm">
        <User />
        <Commits />
      </div>
    </div>
  );
};

export default Home;
