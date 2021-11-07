import { FunctionComponent } from 'react';
import Full from './Full';
import Sidebar from './Sidebar';

export const Layout: FunctionComponent = props => {
  return (
    <>
      <Full className="flex justify-start">
        <Sidebar />
        {props.children}
      </Full>
    </>
  );
};
