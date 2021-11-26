import { SeoData, StrapiMedia } from 'types';

export interface Post {
  id?: number;
  slug?: string;
  title?: string;
  description?: string;
  content?: string;
  image?: StrapiMedia;
  category?: Category;
  author?: Writer;
  seo?: SeoData;
  created_at?: Date;
  updated_at?: Date;
}

export interface Writer {
  name?: string;
  picture?: StrapiMedia;
  posts?: Post[];
}

export interface Category {
  name?: string;
  slug?: string;
  posts?: Post[];
}
