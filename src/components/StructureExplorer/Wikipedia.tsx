import { useState, useEffect } from 'react';

import { useIdContext } from '../../hooks/IdContext';
import SimpleTable from '../SimpleTable';

function OpenWiki(): JSX.Element {
  let { selectedId } = useIdContext();

  return (
    <a
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      href={`https://en.wikipedia.org/wiki?curid=${selectedId}`}
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
  let { selectedId } = useIdContext();

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&pageids=${selectedId}`;

  useEffect(() => {
    void fetch(url)
      .then((response) => response.json())
      .then((myJson) => {
        if (selectedId) {
          setContents(myJson.query.pages[selectedId].extract);
        }
      });
  }, [selectedId, url]);

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
