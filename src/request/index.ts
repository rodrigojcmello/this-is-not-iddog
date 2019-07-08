import * as ls from 'local-storage';

async function api<R, P>(
  method: 'get' | 'post',
  endpoint: string,
  parameters: P
): Promise<R> {
  let query = '';
  if (parameters) {
    const esc = encodeURIComponent;
    query = Object.keys(parameters)
      .map((k): string => `${esc(k)}=${esc(parameters[k])}`)
      .join('&');
  }
  const headers: HeadersInit = new Headers({
    'Content-type': 'application/json; charset=utf-8',
    Authorization: ls.get<string>('token')
  });
  const response = await fetch(
    `https://api-iddog.idwall.co/${endpoint}?${query}`,
    {
      method,
      headers
    }
  );
  return response.json();
}

export default api;
