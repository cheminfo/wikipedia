import { Duplicates } from '../components/BrowseErrors/Duplicates';
import { NoCorrectSMILES } from '../components/BrowseErrors/NoCorrectSMILES';
import { NotFound } from '../components/BrowseErrors/NotFound';
import { SMILESErrors } from '../components/BrowseErrors/SMILESErrors';

export function BrowseErrors(): JSX.Element {
  return (
    <div className="mx-56 mt-14">
      <div className="text-[#0A4E7A]">
        <div className="">
          <div className="text-4xl">Articles with SMILES problems</div>
          <div className="flex space-x-1 font-light">
            <div className="">Last data extraction :</div>
            {/* Last data extraction date */}
            <div className="">date</div>
          </div>
        </div>
        <div className="my-5 font-normal">
          Click on any cell to open the corresponding article on Wikipedia
        </div>
      </div>
      <div className="mt-12 grid-cols-2 gap-x-28 xl:grid">
        <Duplicates />
        <NotFound />
        <SMILESErrors />
        <NoCorrectSMILES />
      </div>
    </div>
  );
}
