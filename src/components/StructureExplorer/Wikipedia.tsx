import { useState, useEffect } from 'react';

import { useIdContext } from '../../hooks/IdContext';
import SimpleTable from '../SimpleTable';

function OpenWiki(): JSX.Element {
  let { selectedTitle } = useIdContext();

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
  const [content, setContent] = useState('');
  let { selectedTitle } = useIdContext();

  const url = `https://en.wikipedia.org/api/rest_v1/page/html/${selectedTitle}`;

  useEffect(() => {
    void fetch(url)
      .then((response) => response.text())
      .then((myHtml) => {
        if (selectedTitle) {
          setContent(
            myHtml
              .replace(/\/\//g, 'https://')
              .replace(
                '</style>',
                'body { overflow: overlay; padding: 12px } ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #eaebed; } ::-webkit-scrollbar-thumb { background: #0a4e7a; } </style>',
              ),
          );
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTitle]);

  const blob = new Blob([content], { type: 'text/html' });
  const blobUrl = URL.createObjectURL(blob);

  return (
    <div className="h-[65vh]">
      <iframe
        src={blobUrl}
        color="red"
        height="100%"
        width="100%"
        className="w-full"
      />
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
