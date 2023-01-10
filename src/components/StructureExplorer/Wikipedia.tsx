import { useState, useEffect } from 'react';

import { useIdContext } from '../../hooks/IdContext';
import SimpleTable from '../SimpleTable';

function OpenWiki(): JSX.Element {
  const { selectedTitle } = useIdContext();

  return (
    <a
      href={`https://en.wikipedia.org/wiki/${selectedTitle}`}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer text-white"
    >
      Open in Wikipedia
    </a>
  );
}

function WikiPage(): JSX.Element {
  const [url, setUrl] = useState('');
  const { selectedTitle } = useIdContext();

  const link = `https://en.wikipedia.org/api/rest_v1/page/html/${selectedTitle}`;

  useEffect(() => {
    void fetch(link)
      .then((response) => response.text())
      .then((myHtml) => {
        if (selectedTitle) {
          const blob = new Blob(
            [
              myHtml
                .replace(/\/\//g, 'https://')
                .replace(
                  /<\/style>/,
                  'body { overflow: overlay; padding: 12px } ::-webkit-scrollbar { width: 6px; height: 0px } ::-webkit-scrollbar-track { background: #92bedf;} ::-webkit-scrollbar-thumb { background: #0a4e7a; } </style>',
                ),
            ],
            { type: 'text/html' },
          );
          setUrl(URL.createObjectURL(blob));
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTitle]);

  return (
    <div className="h-[65vh]">
      <iframe src={url} height="100%" width="100%" className="w-full" />
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