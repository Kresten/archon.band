export function getStrapiURL(path = ''): string {
  return `${process.env.STRAPI_API_URL || 'http://localhost:1337'}${path}`;
}

export async function fetchAPI(path: string) {
  const requestUrl = getStrapiURL(path);
  const res = await fetch(requestUrl);
  if (!res.ok) {
    const errorMessage = await res.text();
    const status = res.status;
    throw new NetworkError(errorMessage, status);
  }
  const json = await res.json();
  return json;
}

class NetworkError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.status = status;
    this.name = 'NetworkError';
  }
}
