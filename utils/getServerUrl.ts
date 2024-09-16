const url = process.env.NEXT_PUBLIC_API_URL;

export const getProxiedServerUrl = (): string | undefined => {
  return url;
};

export const getEndpointUrl = (path?: string): string => {
  return `${getProxiedServerUrl()}/${path}`;
};
