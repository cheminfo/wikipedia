import { useEffect, useRef, useState } from 'react';

import { useMoleculeContext } from '../../contexts/molecule_context.js';
import SimpleTable from '../SimpleTable.js';

function OpenWiki() {
  const { selectedStructure } = useMoleculeContext();

  if (!selectedStructure) {
    return null;
  }

  return (
    <a
      href={`https://en.wikipedia.org/wiki/${selectedStructure.title}`}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer text-white"
    >
      Open in Wikipedia
    </a>
  );
}

function WikiPage() {
  const [url, setUrl] = useState('');
  const [iframeHeight, setIframeHeight] = useState(0);
  const { selectedStructure } = useMoleculeContext();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleIframeLoad = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      const height = iframe.contentWindow?.document.body.scrollHeight;
      setIframeHeight(height ? height + 24 : 0);
    }
  };

  useEffect(() => {
    if (!selectedStructure) return;
    const link = `https://en.wikipedia.org/api/rest_v1/page/html/${selectedStructure.title}`;
    let url: string;
    let aborted = false;
    void fetch(link)
      .then((response) => response.text())
      .then((myHtml) => {
        if (aborted) return;
        const blob = new Blob(
          [
            myHtml
              .replace(/\/\//g, 'https://')
              .replace(
                /<\/style>/,
                'body { padding: 12px } ::-webkit-scrollbar { width: 6px; height: 0px } ::-webkit-scrollbar-track { background: #92bedf;} ::-webkit-scrollbar-thumb { background: #0a4e7a; } </style>',
              ),
          ],
          { type: 'text/html' },
        );
        url = URL.createObjectURL(blob);
        setUrl(url);
      });
    return () => {
      aborted = true;
      if (url) {
        URL.revokeObjectURL(url);
      }
    };
  }, [selectedStructure]);

  return (
    <iframe
      ref={iframeRef}
      src={url}
      onLoad={handleIframeLoad}
      height={iframeHeight}
      width="100%"
    />
  );
}

export function Wikipedia() {
  return (
    <SimpleTable title="Wikipedia article" option={<OpenWiki />}>
      <WikiPage />
    </SimpleTable>
  );
}
