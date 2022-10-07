import SimpleTable from '../SimpleTable';

import { ErrorSection } from './ErrorSection';

function Content(): JSX.Element {
  return (
    <div className="scrollbar grid max-h-[204px] grid-cols-10 overflow-y-auto">
      {/* DATA */}
      <div className="flex justify-center border py-2 text-xs">3334</div>
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
          className="text-sm"
        />
      }
    />
  );
}
