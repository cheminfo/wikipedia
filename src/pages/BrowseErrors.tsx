import { Rings } from 'react-loader-spinner';

import { Duplicates } from '../components/BrowseErrors/Duplicates';
import { NoCorrectSMILES } from '../components/BrowseErrors/NoCorrectSMILES';
import { NotFound } from '../components/BrowseErrors/NotFound';
import { SMILESErrors } from '../components/BrowseErrors/SMILESErrors';
import { ErrorContextProvider } from '../hooks/ErrorContext';
import useGetErrorData from '../hooks/useGetErrorData';

export function BrowseErrors(): JSX.Element {
  const {
    date,
    dupLength,
    notfoundLength,
    errorsLength,
    nogoodLength,
    dup,
    notfound,
    nogood,
    errors,
    loading,
  } = useGetErrorData();
  return (
    <div className="">
      {loading ? (
        <div className="-mt-12 flex h-screen flex-col items-center justify-center">
          <Rings
            height="120"
            width="120"
            color="#92BEDF"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible
          />
        </div>
      ) : (
        <div className="xs:px-20 px-10 pt-14 xl:px-28 2xl:px-60">
          <div className="text-[#0A4E7A]">
            <div className="">
              <div className="text-2xl lg:text-4xl">
                Articles with SMILES problems
              </div>
              <div className="flex space-x-1 text-sm font-light lg:text-base">
                <div className="">Last data extraction :</div>
                <div className="">{date}</div>
              </div>
            </div>
            <div className="my-8 text-sm font-normal lg:text-base">
              Click on any cell to open the corresponding article on Wikipedia
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-between gap-y-20">
            <ErrorContextProvider>
              <Duplicates number={dupLength} data={dup} />
              <NotFound number={notfoundLength} data={notfound} />
              <SMILESErrors number={errorsLength} data={errors} />
              <NoCorrectSMILES number={nogoodLength} data={nogood} />
            </ErrorContextProvider>
          </div>
        </div>
      )}
    </div>
  );
}
