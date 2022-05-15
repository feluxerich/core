import Login from '@components/pages/Login';

const login = ({ nextPage }: any) => <Login nextPage={nextPage} />;

login.noLayout = true;

export default login;

export const getServerSideProps = (context: any) => {
  return {
    props: {
      nextPage: context?.query?.nextPage,
    },
  };
};
