import { useApps } from 'hooks/useApps';

const Apps = () => {
  const apps = useApps();

  return (
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
              <div className="flex">
                {tags.map((tag, i) => {
                  return (
                    <div className="flex justify-center items-center px-2 h-022 font-bold text-xs bg-primary-700 mr-2 rounded-5" key={i}>
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Apps;
