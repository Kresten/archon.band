import App from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../assets/css/style.css';
import { createContext } from 'react';
import { getStrapiMedia } from '../lib/media';
import { fetchAPI } from '../lib/api';
import { StrapiMedia } from '../types';

type GlobalContext = {
  favicon?: StrapiMedia;
  siteName?: string;
  defaultSeo?: {
    metaTitle?: string;
    metaDescription?: string;
    shareImage?: StrapiMedia;
  };
};

export const GlobalContext = createContext<GlobalContext>({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <link rel='shortcut icon' href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI('/global');
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
