import { StrapiMedia } from 'types';

export interface SeoData {
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: StrapiMedia;
  preventIndexing?: boolean;
  keywords?: string;
}

export interface GlobalData {
  siteName?: string;
  defaultSeo?: SeoData;
}

export interface HeroData {
  title: string;
}

export interface PageData {
  seo?: SeoData;
  hero?: HeroData;
}

export interface Channel {
  name?: string;
  icon: StrapiMedia;
  href: string;
}

export interface FooterData {
  channels?: Channel[];
}
