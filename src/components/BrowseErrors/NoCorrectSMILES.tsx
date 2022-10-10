import useGetData from '../../hooks/useGetData';
import SimpleTable from '../SimpleTable';

import { ErrorSection } from './ErrorSection';

function Content(): JSX.Element {
  const { nogood } = useGetData();
  return (
    <div className="scrollbar grid max-h-[204px] grid-cols-3 overflow-y-auto overflow-x-hidden rounded-b-lg sm:grid-cols-5 xl:grid-cols-7">
      {nogood.map((id) => (
        <a
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          href={`https://en.wikipedia.org/wiki?curid=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          key={id}
          className="cursor-pointer"
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
export function NoCorrectSMILES(props: Props): JSX.Element {
  return (
    <ErrorSection
      title="Pages without correct SMILES :"
      number={props.number}
      description="List of pages in which all the SMILES have errors. Therefore these pages cannot be found in the search page"
      table={
        <SimpleTable
          title="Article ID"
          content={<Content />}
          height="h-[204px]"
          className="mt-10 text-sm sm:mt-0"
        />
      }
    />
  );
}
