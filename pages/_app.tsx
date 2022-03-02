import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

import 'nprogress/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';

import '@styles/globals.css';
import '@styles/colors.css';
import '@styles/components.css';
import '@styles/animations.css';

import nProgress from 'nprogress';
import Router from 'next/dist/client/router';
import { Layout } from '@components/Layout';
import { NextSeo } from 'next-seo';
import React from 'react';

nProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

type NextPageWithLayout = NextPage & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const DynamicLayout = Component.noLayout ? React.Fragment : Layout;

  return (
    <>
      <DynamicLayout>
        <Component {...pageProps} />
      </DynamicLayout>
      <NextSeo defaultTitle="Core" title="Core" description="Used to know" />
    </>
  );
}

export default MyApp;
