import Router from 'next/router';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react'
import NProgress from 'nprogress';
import "nprogress/nprogress.css";

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  // NProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
    NProgress.inc();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
    NProgress.remove();
  })

  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp