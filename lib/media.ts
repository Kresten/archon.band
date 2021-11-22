import { StrapiMedia } from '../types';
import { getStrapiURL } from './api';

export function getStrapiMedia(media: StrapiMedia) {
  let imageUrl = '';
  if (media) {
    imageUrl = media.url.startsWith('/') ? getStrapiURL(media.url) : media.url;
  }
  return imageUrl;
}
