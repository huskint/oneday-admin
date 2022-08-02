import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import 'tailwindcss/tailwind.css';

import GlobalStyles from '../ui/core/GlobalStyles';
import '../styles/globals.css';

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <title>어떤 하루</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap"
        />
      </Head>
      <GlobalStyles />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
