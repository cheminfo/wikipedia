import Table from './Table';

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
  return <div className="h-96">Some article</div>;
}

export function Wikipedia(): JSX.Element {
  return (
    <Table
      title="Wikipedia article"
      option={<OpenWiki />}
      className="w-full"
      content={<WikiPage />}
    />
  );
}
