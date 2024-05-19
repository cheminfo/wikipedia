import { Dispatch, SetStateAction } from 'react';

import About from '../components/About';
import { Duplicates } from '../components/BrowseErrors/Duplicates';
import { NoCorrectSMILES } from '../components/BrowseErrors/NoCorrectSMILES';
import { NotFound } from '../components/BrowseErrors/NotFound';
import { SMILESErrors } from '../components/BrowseErrors/SMILESErrors';
import { useDataContext } from '../hooks/DataContext';

interface BrowseErrorsProps {
  showAbout: boolean;
  setShowAbout: Dispatch<SetStateAction<boolean>>;
}

export function BrowseErrors({ showAbout, setShowAbout }: BrowseErrorsProps) {
  const {
    allData: {
      count,
      data: { errors, nogood, notfound, dup },
    },
    loading,
  } = useDataContext();

  return (
    <div>
      {loading ? (
        <div className="-mt-12 flex h-screen flex-col items-center justify-center">
          <img src="loading.gif" />
        </div>
      ) : (
        <div>
          <About showAbout={showAbout} setShowAbout={setShowAbout} />
          <div className="xs:px-20 px-10 pt-14 xl:px-28 2xl:px-60">
            <div className="text-darkblue">
              <div>
                <div className="text-2xl lg:text-4xl">
                  Articles with SMILES problems
                </div>
                <div className="flex space-x-1 text-sm font-light lg:text-base">
                  <div className="">Last data extraction:</div>
                  <div className="">{count.date.slice(0, 10)}</div>
                </div>
              </div>
              <div className="my-8 text-sm font-normal lg:text-base">
                Click on any cell to open the corresponding article on Wikipedia
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-between gap-y-20">
              <Duplicates number={count.dup} data={dup} />
              <NotFound number={count.notfound} data={notfound} />
              <SMILESErrors number={count.errors} data={errors} />
              <NoCorrectSMILES number={count.nogood} data={nogood} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
