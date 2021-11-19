import '@styles/globals.css';
import '@styles/colors.css';
import '@styles/animations.css';
import '@styles/components.css';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
import { Router } from 'next/dist/client/router';
import nProgress from 'nprogress';
import { Layout } from '@components/Layout';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

type NextPageWithLayout = NextPage & {
  layout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutC = Component.layout ? ({ children }: any) => <Layout>{children}</Layout> : ({ children }: any) => children;

  return (
    <>
      <LayoutC>
        <Component {...pageProps} />
      </LayoutC>
      <NextSeo defaultTitle="Core" title="Core" description="Used to know" />
    </>
  );
}

export default MyApp;
