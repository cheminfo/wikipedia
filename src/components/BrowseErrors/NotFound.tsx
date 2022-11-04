import SimpleTable from '../SimpleTable';

import { ErrorSection } from './ErrorSection';
import ErrorTableContent from './ErrorTableContent';

interface NotFoundProps {
  number: number;
  data: number[];
}
export function NotFound(props: NotFoundProps): JSX.Element {
  return (
    <ErrorSection
      title="Not found :"
      number={props.number}
      description="List of pages that contain a ChemBox or DrugBox but no SMILES field"
      table={
        <SimpleTable
          title="Article ID"
          content={<ErrorTableContent data={props.data} />}
          height="h-[204px]"
          className="text-sm"
        />
      }
    />
  );
}
