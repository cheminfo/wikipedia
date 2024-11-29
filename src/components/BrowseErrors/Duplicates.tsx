import SimpleTable from '../SimpleTable.js';

import { ErrorSection } from './ErrorSection.js';
import ErrorTableContent from './ErrorTableContent.js';

interface DuplicatesProps {
  number: number;
  data: number[];
}

export function Duplicates(props: DuplicatesProps) {
  return (
    <ErrorSection
      title="Duplicates:"
      number={props.number}
      description="List of pages that contain several SMILES that represent the exact same structure"
      table={
        <SimpleTable title="Article ID" height="h-[204px]" className="text-sm">
          <ErrorTableContent data={props.data} />
        </SimpleTable>
      }
    />
  );
}
