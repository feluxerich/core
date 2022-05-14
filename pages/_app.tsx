import 'nprogress/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
import 'slick-carousel/slick/slick.css';

import '@styles/globals.css';
import '@styles/colors.css';
import '@styles/components.css';
import '@styles/animations.css';

import { Router } from 'next/router';
import { NextSeo } from 'next-seo';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryProvider } from '@context/useQuery';

import Layout from '@components/Layout';
import Fragment from '@components/Fragment';

import nProgress from 'nprogress';
import { AppPropsWithLayout } from '@components/Layout/LayoutTypes';

nProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const DynamicLayout: any = Component.noLayout ? Fragment : Layout;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <QueryProvider>
          <DynamicLayout center={Component?.center}>
            <Component {...pageProps} />
          </DynamicLayout>
        </QueryProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>

      <NextSeo defaultTitle="Core" title="Core" description="Used to know" />
    </>
  );
}

export default MyApp;
