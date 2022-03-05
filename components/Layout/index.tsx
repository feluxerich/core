import { FunctionComponent } from 'react';
import Full from '../Full';
import CookieConsent from './CookieConsent';
import Header from './Header';

export const Layout: FunctionComponent = ({ center, ...props }: any) => {
  return (
    <Full className="flex items-center justify-center">
      <Header />
      <Full className={`max-w-screen-DEFAULT w-full pt-11 px-11 ${center && 'pb-11'}`}>
        <div className={`w-full h-full pt-11 ${center ? 'flex justify-center items-center pb-11' : ''}`}>{props.children}</div>
      </Full>
      <CookieConsent />
    </Full>
  );
};

export default Layout;
