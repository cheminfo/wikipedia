import useGetData from '../../hooks/useGetData';
import SimpleTable from '../SimpleTable';

import { ErrorSection } from './ErrorSection';

function Content(): JSX.Element {
  const { notfound } = useGetData();
  return (
    <div className="scrollbar grid max-h-[204px] grid-cols-3 overflow-y-auto overflow-x-hidden rounded-b-lg sm:grid-cols-5 xl:grid-cols-7">
      {notfound.map((id) => (
        <a
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          href={`https://en.wikipedia.org/wiki?curid=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          key={id}
          className="cursor-pointer hover:bg-[#EAEBED]"
        >
          <div key={id} className="flex justify-center border py-2 text-xs">
            {id}
          </div>
        </a>
      ))}
    </div>
  );
}

export interface Props {
  number: string;
}
export function NotFound(props: Props): JSX.Element {
  return (
    <ErrorSection
      title="Not found :"
      number={props.number}
      description="List of pages that contain a ChemBox or DrugBox but no SMILES field"
      table={
        <SimpleTable
          title="Article ID"
          content={<Content />}
          height="h-[204px]"
          className="text-sm"
        />
      }
    />
  );
}
