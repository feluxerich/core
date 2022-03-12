import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { IoGitCommit, IoNotifications } from 'react-icons/io5';
import moment from 'moment';
import { useQuery } from 'react-query';
import { basicFetch } from '@m2vi/iva';
import { Commits } from '@Types/core';

const Notifications = () => {
  const { data: commits } = useQuery(
    `gh-commits`,
    async (): Promise<Commits> => {
      const data = await basicFetch<any>(`/api/core/commits`);

      return data?.data;
    },
    { refetchInterval: 15000, refetchOnWindowFocus: true, initialData: [] },
  );

  return (
    <div className="flex justify-end">
      <Menu as="div" className="relative h-full">
        {({ open }) => {
          return (
            <>
              <div className="h-full flex justify-center">
                <Menu.Button
                  className="font-normal text-sm text-center flex justify-center items-center cursor-pointer h-7 w-7"
                  aria-label="Notifications"
                >
                  <IoNotifications className="h-4 w-4" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="absolute z-10 right-0 bg-primary-800 w-400 mt-3 origin-top-right rounded-8 shadow-1 overflow-hidden shadow-xl">
                  <div className="w-full overflow-y-auto h-full">
                    <Menu.Items className="h-300" unmount={false}>
                      <div className="w-full py-3 px-4 border-b border-primary-700">
                        <span className="text-xl font-bold">Notifications</span>
                      </div>
                      {commits?.slice(0, 20).map(({ sha, author, commit }, index) => (
                        <Menu.Item key={index}>
                          <div className="w-full py-3 px-4 hover:bg-primary-700 cursor-pointer">
                            <div className="flex items-center justify-between h-full">
                              <div className="flex justify-start items-center h-full">
                                <div className="h-8 w-8 rounded bg-white grid place-items-center mr-3">
                                  <IoGitCommit className="h-4 w-4 text-primary-900" />
                                </div>

                                <div className="flex flex-col">
                                  <span className="">{commit.message.split(' of https://')[0]}</span>
                                  <span className="text-primary-300 text-sm">
                                    {moment(commit.date).fromNow()} &ndash; {author.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </div>
                </div>
              </Transition>
            </>
          );
        }}
      </Menu>
    </div>
  );
};

export default Notifications;
