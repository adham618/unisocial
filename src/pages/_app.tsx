import { AppProps } from 'next/app';
import { useEffect } from 'react';

import 'animate.css/animate.min.css';
import '@/styles/globals.css';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    new WOW().init();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
