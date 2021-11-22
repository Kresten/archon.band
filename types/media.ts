export interface StrapiMedia extends StrapiMediaFormat {
  formats: {
    large: StrapiMediaFormat;
    medium: StrapiMediaFormat;
    small: StrapiMediaFormat;
    thumbnail: StrapiMediaFormat;
  };
}

interface StrapiMediaFormat {
  alternativeText: string | null;
  caption: string | null;
  created_at: Date;
  ext: string;
  hash: string;
  height: number;
  width: number;
  mime: string;
  name: string;
  path: string | null;
  provider_metadata: { public_id: string; resource_type: string };
  size: number;
  url: string;
}
