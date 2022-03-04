import Image from 'next/image';
import { Button } from '../Button';
import Cookies from 'js-cookie';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { fVoid } from '@utils/utils';
import CookieBanner from '@assets/svg/cookieBanner.svg';

export const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(Cookies.get('cookie-consent') !== 'true');
    const timeout = setTimeout(() => setIsOpen(Cookies.get('cookie-consent') !== 'true'), 1000);

    return () => clearTimeout(timeout);
  }, []);

  const setCookie = () => {
    Cookies.set('cookie-consent', 'true', {
      sameSite: 'None',
      path: '/',
      secure: true,
      expires: 365.25,
    });

    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={fVoid}>
        <div className="min-h-screen px-4 text-center bg-modal transition-all duration-300">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full px-5 py-4 overflow-hidden text-center align-middle transition-all transform shadow-xl max-w-widget bg-primary-800 rounded-8">
              <div className="relative w-full mb-4 h-150 flex justify-center items-center">
                <CookieBanner />
              </div>

              <span className="text-xl font-bold">Cookies</span>

              <div className="mt-3">
                <p className="text-base text-center text-primary-200">
                  This website uses cookies to give you the best experience. By the way, it does not work without lol.
                </p>
              </div>

              <div className="grid grid-flow-row gap-1 mt-4">
                <Button className="w-full uppercase" color="primary" onClick={setCookie}>
                  Accept
                </Button>
                <Button className="w-full" color="text" onClick={() => window.location.replace('https://www.youtube.com/watch?v=yPYZpwSpKmA')}>
                  Decline
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

CookieConsent.displayName = 'CookieConsent';

export default CookieConsent;
