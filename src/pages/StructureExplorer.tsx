import { Rings } from 'react-loader-spinner';

import { DrawStructure } from '../components/StructureExplorer/DrawStructure';
import { MoleculeList } from '../components/StructureExplorer/MoleculeList';
import { Wikipedia } from '../components/StructureExplorer/Wikipedia';
import { useDataContext } from '../hooks/DataContext';
import { IdContextProvider } from '../hooks/IdContext';

export function StructureExplorer(): JSX.Element {
  const {
    allData: {
      data: { molecules },
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
        <IdContextProvider>
          <div className="py-14 px-20 xl:px-28 2xl:px-60">
            <div className="flex justify-center space-x-5">
              <DrawStructure />
              <MoleculeList molecules={molecules} />
            </div>
            <Wikipedia />
          </div>
        </IdContextProvider>
      )}
    </div>
  );
}
