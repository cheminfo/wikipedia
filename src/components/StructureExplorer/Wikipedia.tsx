import { useState, useEffect } from 'react';

import SimpleTable from '../SimpleTable';

function OpenWiki(): JSX.Element {
  return (
    <a
      href="https://www.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer text-white"
    >
      Open in Wikipedia
    </a>
  );
}

function WikiPage(): JSX.Element {
  const [contents, setContents] = useState('');
  const url =
    // 'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=revisions&rvprop=content&pageids=1365';
    'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&pageids=1365';

  useEffect(() => {
    void fetch(url)
      .then((response) => response.json())
      .then((myJson) => {
        // setContents(myJson.query.pages[1365].revisions[0]['*']);
        setContents(myJson.query.pages[1365].extract);
      });
  }, []);

  return (
    <div className="p-5">
      {
        // eslint-disable-next-line react/no-danger
        <div dangerouslySetInnerHTML={{ __html: contents }} />
      }
    </div>
  );
}

export function Wikipedia(): JSX.Element {
  return (
    <SimpleTable
      title="Wikipedia article"
      option={<OpenWiki />}
      className="w-full"
      content={<WikiPage />}
    />
  );
}
