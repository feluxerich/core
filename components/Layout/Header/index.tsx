import { useUser } from 'hooks/useUser';
import Image from 'next/image';
import { IoNotifications } from 'react-icons/io5';
import { Input } from './Input';
import Logo from '@assets/svg/logo.svg';
import Notifications from './Notifications';
import Link from 'next/link';

const Header = () => {
  const user = useUser();

  return (
    <div className="fixed z-20 top-0 left-0 right-0 w-full bg-primary-900">
      <div className="w-full px-11 py-5 flex justify-between items-center">
        <Link href="/">
          <a className="w-full max-w-screen-fxs items-center flex">
            <Logo className="mr-2" />
            <span className="text-base font-bold text-accent leading-4">Core</span>
          </a>
        </Link>

        <div className="w-full max-w-screen-fmd">
          <Input className="w-full" placeholder="Search for app name, language or tags" />
        </div>
        <div className="w-full max-w-screen-fsm flex justify-end">
          <div className="flex items-center">
            <Notifications />
            <div className="ml-5 w-8 aspect-square rounded overflow-hidden cursor-pointer">
              {user?.avatar ? <Image src={user?.avatar} alt=" " height={40} width={40} /> : <div className="h-full w-full bg-primary-700"></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
