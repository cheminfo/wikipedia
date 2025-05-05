const apiToken = process.env.WIKIPEDIA_API_KEY;

/** @type {HeadersInit} */
const fetchHeaders = {
  Accept: 'application/json',
  'User-Agent': 'WCSEBot/1.0 (https://github.com/cheminfo/wikipedia) fetch/1.0',
};

if (apiToken) {
  fetchHeaders.Authorization = `Bearer ${apiToken}`;
}

/**
 * @param {Record<string, string|number|undefined>} [params]
 * @returns Promise<any>
 */
export async function request(params) {
  const url = new URL('https://en.wikipedia.org/w/api.php');
  if (params) {
    for (const [name, value] of Object.entries(params)) {
      if (typeof value !== 'undefined') {
        url.searchParams.set(name, String(value));
      }
    }
    url.searchParams.set('format', 'json');
  }
  const response = await fetch(url, {
    headers: fetchHeaders,
  });
  return response.json();
}

/**
 * @param {number} id
 */
export function getPagePath(id) {
  const idStr = String(id);
  const l = idStr.length;
  const prefix = idStr.substring(l, l - 2);
  const prePath = `./data/pages/${prefix}`;
  return {
    prefix: prePath,
    full: `${prePath}/${idStr}.json`,
  };
}
