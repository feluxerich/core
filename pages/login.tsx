import { Layout } from '@components/Layout';
import Login from '@components/pages/Login';
import { ReactElement } from 'react';

const login = () => {
  return <Login />;
};

login.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default login;
