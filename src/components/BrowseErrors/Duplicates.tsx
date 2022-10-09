import useGetData from '../../hooks/useGetData';
import SimpleTable from '../SimpleTable';

import { ErrorSection } from './ErrorSection';

function Content(): JSX.Element {
  const { dup } = useGetData();
  return (
    <div className="scrollbar grid max-h-[204px] grid-cols-3 overflow-y-auto overflow-x-hidden rounded-b-lg sm:grid-cols-5 xl:grid-cols-7">
      {dup.map((id) => (
        <div key={id} className="flex justify-center border py-2 text-xs">
          {id}
        </div>
      ))}
    </div>
  );
}

export interface Props {
  number: string;
}
export function Duplicates(props: Props): JSX.Element {
  return (
    <ErrorSection
      title="Duplicates :"
      number={props.number}
      description="List of pages that contain several SMILES that represent the exact same structure"
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
