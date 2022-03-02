import { FunctionComponent } from 'react';
import Full from '../Full';
import CookieConsent from './CookieConsent';
import Header from './Header';

export const Layout: FunctionComponent = props => {
  return (
    <Full className="flex items-center justify-center">
      <Header />
      <Full className="max-w-screen-DEFAULT w-full pt-11 px-11">{props.children}</Full>
      <CookieConsent />
    </Full>
  );
};
