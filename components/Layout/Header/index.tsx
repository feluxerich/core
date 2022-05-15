import { useUser } from 'hooks/useUser';
import Image from 'next/image';
import { Input } from './Input';
import Logo from '@assets/svg/logo.svg';
import Notifications from './Notifications';
import Link from 'next/link';

const Header = () => {
  const user = useUser();

  return (
    <div className="fixed top-0 left-0 right-0 z-20 w-full bg-primary-900">
      <div className="flex items-center justify-between w-full py-5 px-11">
        <Link href="/">
          <a className="flex items-center w-full max-w-screen-fxs">
            <Logo className="mr-2" />
            <span className="text-base font-bold leading-4 text-accent">Core</span>
          </a>
        </Link>

        <div className="w-full max-w-screen-fmd">
          <Input className="w-full" placeholder="Search for app name, language or tags" />
        </div>
        <div className="flex justify-end w-full max-w-screen-fsm">
          <div className="flex items-center">
            <Notifications />
            <div className="w-8 ml-5 overflow-hidden rounded cursor-pointer aspect-square">
              <Link href={'/account/auth'} passHref>
                {user?.avatar ? <Image src={user?.avatar} alt=" " height={40} width={40} /> : <div className="w-full h-full bg-primary-700"></div>}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
