import superagent from 'superagent';

export function request(options) {
  options.format = 'json';
  return new Promise((resolve, reject) => {
    superagent
      .get('https://en.wikipedia.org/w/api.php')
      .set(
        'User-Agent',
        'WikipediaSMILES/1.0 (https://wikipedia.cheminfo.org) SuperAgent/1.0',
      )
      .query(options)
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.body);
        }
      });
  });
}

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
