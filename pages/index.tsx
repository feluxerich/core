import Commits from '@components/Commits';
import User from '@components/User';
import { useApps } from 'hooks/useApps';

const Home = () => {
  const apps = useApps();

  return (
    <div className="w-full h-full pt-11 flex justify-between items-start">
      <div className="max-w-screen-fxs w-full mr-8"></div>
      <div className="max-w-screen-fmd w-full flex flex-col mr-8">
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">Apps</span>
          <span className="font-semibold text-sm text-primary-300">69 Apps</span>
        </div>
        <div className="w-full mt-5 grid grid-flow-col">
          {apps.map(({ id, key, name, route, desc, tags, language, repository, owner }) => {
            return (
              <div className="w-full bg-primary-800 rounded-8 p-4 flex flex-col" key={id}>
                <div className="flex mb-2">
                  <span className="font-bold text-sm text-primary-300">{owner}/</span>
                  <span className="font-bold text-sm text-primary-100">{key}</span>
                </div>
                <span className="text-primary-300 text-sm mb-4">{desc}</span>
                <div className="flex"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-w-screen-fsm w-full grid grid-flow-row gap-6 mr-0">
        <User />
        <Commits />
      </div>
    </div>
  );
};

export default Home;
