import SimpleTable from '../SimpleTable';

import { ErrorSection } from './ErrorSection';
import ErrorTableContent from './ErrorTableContent';

interface Props {
  number: number;
  data: number[];
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
          content={<ErrorTableContent data={props.data} follow />}
          height="h-[204px]"
          className="mt-10 text-sm sm:mt-0"
        />
      }
    />
  );
}
