import '@styles/globals.css';
import '@styles/colors.css';
import '@styles/animations.css';
import '@styles/components.css';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import { Layout } from '@components/Layout';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => <Layout>{page}</Layout>);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <NextSeo defaultTitle="Core" title="Core" description="Used to know" />
    </>
  );
}

export default MyApp;
