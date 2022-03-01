import Image from 'next/image';
import { Button } from './Button';
import Cookies from 'js-cookie';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

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
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={() => {}}>
        <div className="min-h-screen px-4 text-center">
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
            <div className="inline-block text-center w-full max-w-widget px-5 py-4 overflow-hidden align-middle transition-all transform bg-primary-800 shadow-xl rounded-8">
              <div className="w-full relative h-150 mb-4">
                <Image src="/svg/cookieBanner.svg" alt="Banner" objectFit="contain" layout="fill" />
              </div>

              <span className="font-bold text-xl">Cookies</span>

              <div className="mt-3">
                <p className="text-base text-primary-200 text-center">
                  This website uses cookies to give you the best experience. By the way, it does not work without lol.
                </p>
              </div>

              <div className="mt-4 grid grid-flow-row gap-1">
                <Button className="w-full uppercase" color="primary" onClick={setCookie}>
                  Accept
                </Button>
                <Button className="w-full" color="text">
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
