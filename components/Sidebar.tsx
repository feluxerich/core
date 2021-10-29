import { sidebar } from '@config/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { SidebarItemProps } from '@Types/config';
import { IoAlertOutline } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <div className="h-screen bg-primary-800 flex flex-col items-center justify-between" style={{ width: '75px' }}>
      <div className="flex flex-col justify-between items-center h-full w-full">
        {Object.entries(sidebar).map((entry, i) => {
          const child = (sidebar as any)[entry[0]];

          return (
            <div className="flex flex-col justify-start items-center w-full p-3" key={i}>
              {Object.entries(child).map((group, i) => {
                const groupName = group[0];
                const entries = group[1];

                return (
                  <div className="w-full grid grid-cols-1 gap-3 mb-3 last:mb-0" key={i}>
                    {(entries as any[]).map(({ icon: Icon, name, route, custom: Custom, external }: SidebarItemProps, i) => {
                      if (Custom) return <Custom key={i} />;
                      if (!Icon) Icon = IoAlertOutline;

                      const children = (
                        <div
                          className="hover:bg-primary-700 rounded-15 grid place-items-center w-full cursor-pointer"
                          style={{ aspectRatio: '1 / 1' }}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                      );

                      return (
                        <>
                          {external ? (
                            <a href={route ? route : '/'} key={i}>
                              {children}
                            </a>
                          ) : (
                            <Link href={route ? route : '/'} passHref key={i}>
                              {children}
                            </Link>
                          )}
                        </>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="w-full p-3" style={{ aspectRatio: '1 / 1', background: 'rgba(0,0,0, 0.25)' }}>
        <div className="h-full grid place-items-center" style={{ aspectRatio: '1 / 1' }}>
          <Image
            src="https://cdn.discordapp.com/avatars/701400631662870609/ef22ead36fbb26869ab8b4086d77a0ab.png?size=256"
            alt="%user% Avatar"
            height="45px"
            width="45px"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
