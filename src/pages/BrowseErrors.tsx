import { Rings } from 'react-loader-spinner';

import About from '../components/About';
import { Duplicates } from '../components/BrowseErrors/Duplicates';
import { NoCorrectSMILES } from '../components/BrowseErrors/NoCorrectSMILES';
import { NotFound } from '../components/BrowseErrors/NotFound';
import { SMILESErrors } from '../components/BrowseErrors/SMILESErrors';
import { useDataContext } from '../hooks/DataContext';
import { IdContextProvider } from '../hooks/IdContext';

interface Props {
  showAbout: boolean;
  setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BrowseErrors({ showAbout, setShowAbout }: Props): JSX.Element {
  const {
    allData: { count },
    allData: {
      data: { errors },
    },
    allData: {
      data: { nogood },
    },
    allData: {
      data: { notfound },
    },
    allData: {
      data: { dup },
    },
    loading,
  } = useDataContext();

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
        <div>
          <About showAbout={showAbout} setShowAbout={setShowAbout} />
          <div className="xs:px-20 px-10 pt-14 xl:px-28 2xl:px-60">
            <div className="text-[#0A4E7A]">
              <div className="">
                <div className="text-2xl lg:text-4xl">
                  Articles with SMILES problems
                </div>
                <div className="flex space-x-1 text-sm font-light lg:text-base">
                  <div className="">Last data extraction :</div>
                  <div className="">{count.date.slice(0, 10)}</div>
                </div>
              </div>
              <div className="my-8 text-sm font-normal lg:text-base">
                Click on any cell to open the corresponding article on Wikipedia
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-between gap-y-20">
              <IdContextProvider>
                <Duplicates number={count.dup} data={dup} />
                <NotFound number={count.notfound} data={notfound} />
                <SMILESErrors number={count.errors} data={errors} />
                <NoCorrectSMILES number={count.nogood} data={nogood} />
              </IdContextProvider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
