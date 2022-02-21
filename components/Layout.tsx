import { FunctionComponent } from 'react';
import Full from './Full';
import Sidebar from './Sidebar';
import CookieConsent from './CookieConsent';

export const Layout: FunctionComponent = props => {
  return (
    <>
      <Full className="flex justify-start">
        <Sidebar />
        <Full className="flex items-center justify-center ml-auto" style={{ width: 'calc(100% - 75px)' }}>
          {props.children}
        </Full>
        <CookieConsent />
      </Full>
    </>
  );
};
