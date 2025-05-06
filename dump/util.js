import { setTimeout as wait } from 'node:timers/promises';

/** @type {HeadersInit} */
const fetchHeaders = {
  Accept: 'application/json',
  'User-Agent': 'WCSEBot/1.0 (https://github.com/cheminfo/wikipedia) fetch/1.0',
};

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
  const response = await fetchWithRetry(url, 1);
  return response.json();
}

/**
 * Fetch a url and retry a couple times with exponential wait time if a rate limit is hit.
 * @see https://www.mediawiki.org/wiki/API:Etiquette
 * @param url {URL}
 * @param attempt {number}
 */
async function fetchWithRetry(url, attempt) {
  const response = await fetch(url, { headers: fetchHeaders });
  if (response.ok) {
    return response;
  } else if (response.status === 429) {
    if (attempt > 3) {
      console.log(Array.from(response.headers.entries()));
      throw new Error(`Rate limit still hit after ${attempt} attempts`);
    }
    // const retryAfter = 100 * 10 ** (attempt - 1);
    const retryAfter = response.headers.get('retry-after');
    console.log(`Rate limit hit for ${url}\nRetry in ${retryAfter}s.`);
    await wait(Number(retryAfter) * 1000);
    return fetchWithRetry(url, attempt + 1);
  } else {
    throw new Error(
      `Unexpected response from ${url}. Status: ${response.status}`,
    );
  }
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
