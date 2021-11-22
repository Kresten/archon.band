export function getStrapiURL(path = ''): string {
  return `${process.env.STRAPI_API_URL || 'http://localhost:1337'}${path}`;
}

export async function fetchAPI(path: string) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
