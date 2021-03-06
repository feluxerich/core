import { PresenceB } from '@Types/lanyard';
import { basicFetch } from '@utils/fetch';
import { useUser } from 'hooks/useUser';
import Image from 'next/image';
import QueryString from 'qs';
import { IoGameController, IoMusicalNotes, IoBuild } from 'react-icons/io5';
import { useQuery } from 'react-query';

const User = () => {
  const user = useUser();
  const { data: lanyard } = useQuery(
    'lanyard',
    async (): Promise<PresenceB | null> => {
      const id = user?.connections?.discord;

      if (!id) return null;

      const data = await basicFetch(`/api/lanyard/rest?${QueryString.stringify({ id: user?.connections?.discord })}`);

      return data;
    },
    { refetchInterval: 3000 },
  );

  return (
    <div className="p-4 flex items-center w-full bg-primary-800 rounded-8">
      <div className="mr-3 w-80 aspect-square rounded overflow-hidden">
        {user?.avatar ? <Image src={user?.avatar} alt=" " height={80} width={80} /> : <div className="h-full w-full bg-primary-700"></div>}
      </div>
      <div className="flex flex-col items-start justify-center h-full ">
        <span className="font-semibold text-sm">
          {user?.firstname} {user?.lastname}
        </span>
        <span className="text-xs text-primary-300">@{user?.username}</span>
        <div className="grid grid-flow-col gap-1 mt-1">
          <div
            className={`flex justify-center items-center rounded-5 h-016 w-6 ${
              lanyard?.activities?.gaming ? 'text-white bg-accent' : 'text-primary-100 bg-primary-700'
            }`}
          >
            <IoGameController className="w-2 h-2" />
          </div>
          <div
            className={`flex justify-center items-center rounded-5 h-016 w-6 ${
              lanyard?.activities?.listening ? 'text-white bg-accent' : 'text-primary-100 bg-primary-700'
            }`}
          >
            <IoMusicalNotes className="w-2 h-2" />
          </div>
          <div
            className={`flex justify-center items-center rounded-5 h-016 w-6 ${
              lanyard?.activities?.working ? 'text-white bg-accent' : 'text-primary-100 bg-primary-700'
            }`}
          >
            <IoBuild className="w-2 h-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
