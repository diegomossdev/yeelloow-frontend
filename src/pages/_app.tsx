import 'antd/dist/antd.css';
import Head from 'next/head';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import 'components/Admin/Navbar/Navbar.css';
import 'components/Admin/Sidebar/Sidebar.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
