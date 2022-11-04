import clsx from 'clsx';

import { useIdContext } from '../../hooks/IdContext';

interface ErrorTableContentProps {
  data: number[];
  follow?: boolean;
}

export default function ErrorTableContent({
  data,
  follow,
}: ErrorTableContentProps): JSX.Element {
  const { selectedId } = useIdContext();
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
            { 'bg-[#EAEBED]': follow && selectedId === id },
            'hover:bg-[#EAEBED]',
          )}
        >
          <div className="flex justify-center border py-2 text-xs">{id}</div>
        </a>
      ))}
    </div>
  );
}
