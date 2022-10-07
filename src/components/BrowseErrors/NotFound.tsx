import useGetData from '../../hooks/useGetData';
import SimpleTable from '../SimpleTable';

import { ErrorSection } from './ErrorSection';

function Content(): JSX.Element {
  const { notfound } = useGetData();
  return (
    <div className="scrollbar grid max-h-[204px] grid-cols-7 overflow-y-auto overflow-x-hidden rounded-b-lg">
      {notfound.map((id) => (
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
