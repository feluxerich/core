import Image from 'next/image';
import { Button } from './Button';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export const CookieConsent = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setDisplay(Cookies.get('cookie-consent') !== 'true'), 1000);

    return () => clearTimeout(timeout);
  }, []);

  return display ? (
    <div className="fixed z-50 flex flex-col max-w-md p-5 border-2 border-primary-600 h-min rounded-5 bg-primary-800 right-10 bottom-10">
      <Image src="/svg/cookie.svg" alt="cookie" width={50} height={50} className="w-max h-max" />
      <span className="mt-5 text-center">This website uses cookies to ensure you get the best experience on our website.</span>
      <Button
        color="secondary"
        className="mt-5 transition duration-500 ease-in-out hover:scale-90"
        onClick={() => {
          Cookies.set('cookie-consent', 'true', {
            sameSite: 'None',
            path: '/',
            secure: true,
            expires: 365,
          });
          setDisplay(false);
        }}
      >
        I unterstand
      </Button>
    </div>
  ) : null;
};

CookieConsent.displayName = 'CookieConsent';

export default CookieConsent;
