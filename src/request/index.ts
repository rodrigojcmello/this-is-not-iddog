import ls from 'local-storage';

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
  const response = await fetch(
    `https://api-iddog.idwall.co/${endpoint}?${query}`,
    {
      method,
      headers: {
        'Content-type': 'application/json; charset=utf-8',
        Authorization: ls('token')
      }
    }
  );
  return response.json();
}

export default api;
