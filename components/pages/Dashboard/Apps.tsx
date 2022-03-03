import { useApps } from 'hooks/useApps';

import IconGrabber from '@public/svg/grabber.svg';
import Link from 'next/link';
import { useSearch } from 'hooks/useSearch';
import { useQuery } from '@context/useQuery';
import { useEffect } from 'react';

const Apps = () => {
  const apps = useApps();
  const { query } = useQuery();
  const { items, search, reset } = useSearch(apps);

  useEffect(() => {
    search(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="flex flex-col w-full mr-8 max-w-screen-fmd">
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">Apps</span>
        <span className="text-sm font-semibold text-primary-300" onClick={reset}>
          {items.length}/{apps.length}
        </span>
      </div>
      <div className="grid w-full grid-flow-row mt-5 gap-4">
        {items.map(({ id, key, name, route, desc, tags, language, repository, owner }) => {
          return (
            <div className="w-full relative" key={id}>
              <div className="cursor-pointer absolute p-4 top-0 right-0 text-primary-300 hover:text-primary-200">
                <IconGrabber className="h-3 w-3" />
              </div>
              <Link href={route}>
                <a className="flex flex-col w-full p-4 bg-primary-800 rounded-8">
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
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Apps;
