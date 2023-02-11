import { AppProps } from 'next/app';

import 'animate.css/animate.min.css';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
