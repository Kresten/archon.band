import { getStrapiMedia } from '../lib/media';
import { StrapiMedia } from '../types';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends Partial<NextImageProps> {
  image: StrapiMedia;
}

export const Image = ({ image, height, width, ...rest }: ImageProps) => {
  const imageUrl = getStrapiMedia(image);
  return (
    <NextImage
      alt={image.alternativeText || image.name}
      src={imageUrl}
      {...(!height || !width ? { layout: 'fill' } : { height, width })}
      {...rest}
    />
  );
};
