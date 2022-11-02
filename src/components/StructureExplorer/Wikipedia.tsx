import DOMPurify from 'dompurify';
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
  let { selectedTitle } = useIdContext();

  const url = `https://en.wikipedia.org/api/rest_v1/page/html/${selectedTitle}`;

  useEffect(() => {
    void fetch(url)
      .then((response) => response.text())
      .then((myHtml) => {
        if (selectedTitle) {
          setContents(myHtml);
        }
      });
  }, [selectedTitle, url]);
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(contents),
  });
  return (
    <div className="p-5">
      {/* eslint-disable-next-line react/no-danger */}
      {<div dangerouslySetInnerHTML={sanitizedData()} />}
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
