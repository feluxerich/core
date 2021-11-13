import { FunctionComponent } from 'react';
import Full from './Full';
import Sidebar from './Sidebar';

export const Layout: FunctionComponent = props => {
  return (
    <>
      <Full className="flex justify-start">
        <Sidebar />
        <Full className="flex items-center justify-center">{props.children}</Full>
      </Full>
    </>
  );
};
