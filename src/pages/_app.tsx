import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Theme as ThemeProvider } from '../common/theme/ThemeProvider';
import { GlobalStyles } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Head>
        <title>2 Aninhos da Rafa</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
