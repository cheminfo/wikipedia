import SimpleTable from '../SimpleTable.js';

import { ErrorSection } from './ErrorSection.js';
import ErrorTableContent from './ErrorTableContent.js';

interface NotFoundProps {
  number: number;
  data: number[];
}
export function NotFound(props: NotFoundProps) {
  return (
    <ErrorSection
      title="Not found:"
      number={props.number}
      description="List of pages that contain a ChemBox or DrugBox but no SMILES field"
      table={
        <SimpleTable title="Article ID" height="h-[204px]" className="text-sm">
          <ErrorTableContent data={props.data} />
        </SimpleTable>
      }
    />
  );
}
