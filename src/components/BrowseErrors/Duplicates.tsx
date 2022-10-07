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

export function Duplicates(): JSX.Element {
  return (
    <ErrorSection
      title="Duplicates :"
      number={566}
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
