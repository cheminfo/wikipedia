import clsx from 'clsx';

import { useMoleculeContext } from '../../contexts/molecule_context.js';

interface ErrorTableContentProps {
  data: number[];
  follow?: boolean;
}

export default function ErrorTableContent({
  data,
  follow,
}: ErrorTableContentProps) {
  const { selectedId } = useMoleculeContext();
  return (
    <div className="scrollbar grid max-h-[204px] grid-cols-3 overflow-y-auto overflow-x-hidden rounded-b-lg sm:grid-cols-5 xl:grid-cols-7">
      {data.map((id, key) => (
        <a
          href={`https://en.wikipedia.org/wiki?curid=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          // eslint-disable-next-line react/no-array-index-key
          key={key}
          className={clsx(
            'cursor-pointer',
            { 'bg-lightgray': follow && selectedId === id },
            'hover:bg-lightgray',
          )}
        >
          <div className="flex justify-center border py-2 text-xs">{id}</div>
        </a>
      ))}
    </div>
  );
}
