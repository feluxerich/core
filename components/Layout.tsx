import { FunctionComponent } from 'react';
import CookieConsent from 'react-cookie-consent';
import Full from './Full';
import Sidebar from './Sidebar';
import Image from 'next/image';

export const Layout: FunctionComponent = props => {
  return (
    <>
      <Full className="flex justify-start">
        <Sidebar />
        <Full className="flex items-center justify-center ml-auto" style={{ width: 'calc(100% - 75px)' }}>
          {props.children}
        </Full>
        <CookieConsent
          disableStyles={true}
          containerClasses="min-w-min w-1/5 h-auto p-4 bg-primary-800 flex flex-col border-t border-l border-primary-600 items-center justify-center rounded-tl-5 fixed bottom-0 right-0"
          buttonClasses="bg-transparent hover:bg-primary-700 text-primary-300 w-auto h-auto border-primary-600 border hover:text-white py-2 px-1 rounded-5"
        >
          <div className="flex flex-row mb-3">
            <Image src="/svg/cookie.svg" alt="cookie" width={50} height={50} className="w-10 h-10" />
            <span className="ml-3 text-lg">This website uses cookies to ensure you get the best experience on our website.</span>
          </div>
        </CookieConsent>
      </Full>
    </>
  );
};
