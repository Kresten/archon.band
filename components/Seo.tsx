import { getStrapiMedia } from '@/lib/media';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GlobalContext } from 'pages/_app';
import { useContext } from 'react';
import { SeoData } from 'types';

interface SeoProps extends SeoData {
  url?: string;
  date?: Date;
  siteName?: string;
}

const baseMeta: SeoProps = {
  metaTitle: 'ARCHON',
  metaDescription:
    'Danish metalcore act ARCHON combines hard-hitting riffs of metalcore with ambience and elements from classical music.',
  preventIndexing: false,
  keywords: 'metal, music, band, denmark, metalcore, rock',
  siteName: 'https://archon.band',
};

export default function Seo({ seo: seoProps }: { seo?: SeoProps }) {
  const router = useRouter();
  const { defaultSeo, siteName } = useContext(GlobalContext);
  // ensure defaults
  const seo = {
    ...baseMeta,
    ...defaultSeo,
    ...seoProps,
  };
  let image = '/android-chrome-512x512.png';
  if (seo.shareImage) {
    image = getStrapiMedia(seo.shareImage);
  }

  return (
    <Head>
      <title>{seo.metaTitle}</title>
      <meta name='description' content={seo.metaDescription} key='description' />
      <meta name='keywords' content={seo.keywords} />
      <meta property='og:url' content={`${seo.url}${router.asPath}`} />
      <link rel='canonical' href={`${seo.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={seo.siteName} />
      <meta property='og:description' content={seo.metaDescription} />
      <meta property='og:title' content={seo.metaTitle} />
      <meta name='image' property='og:image' content={image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={siteName} />
      <meta name='twitter:title' content={seo.metaTitle} />
      <meta name='twitter:description' content={seo.metaDescription} />
      <meta name='twitter:image' content={image} />
      {seo.preventIndexing && (
        <>
          <meta name='robots' content='noindex'></meta>
          <meta name='googlebot' content='noindex'></meta>
        </>
      )}
      {seo.date && (
        <>
          <meta property='article:published_time' content={seo.date.toString()} />
          <meta name='publish_date' property='og:publish_date' content={seo.date.toString()} />
          <meta name='author' property='article:author' content='Theodorus Clarence' />
        </>
      )}
    </Head>
  );
}
