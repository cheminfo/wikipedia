import { useState } from 'react';

import About from '../components/About';
import { DrawStructure } from '../components/StructureExplorer/DrawStructure';
import { MoleculeList } from '../components/StructureExplorer/MoleculeList';
import { Wikipedia } from '../components/StructureExplorer/Wikipedia';
import { useDataContext } from '../hooks/DataContext';
import { IdContextProvider } from '../hooks/IdContext';

interface StructureExplorerProps {
  showAbout: boolean;
  setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

export type SearchType = 'substructure' | 'exact' | 'similarity';

export function StructureExplorer({
  showAbout,
  setShowAbout,
}: StructureExplorerProps): JSX.Element {
  const {
    allData: {
      data: { molecules },
    },
    loading,
    db,
  } = useDataContext();

  const [idCode, setIdCode] = useState('');
  const [search, setSearch] = useState<SearchType>('substructure');

  return (
    <div className="">
      {loading ? (
        <div className="-mt-12 flex h-screen flex-col items-center justify-center">
          <img src="loading.gif" />
        </div>
      ) : (
        <div>
          <About showAbout={showAbout} setShowAbout={setShowAbout} />
          <IdContextProvider>
            <div className="px-10 pt-5 sm:px-20 xl:px-28 2xl:px-60">
              <div className="flex flex-col justify-center lg:flex-row lg:space-x-5">
                <DrawStructure
                  setIdCode={setIdCode}
                  setSearch={setSearch}
                  search={search}
                />
                <MoleculeList
                  molecules={molecules}
                  idCode={idCode}
                  search={search}
                  db={db}
                />
              </div>
              <Wikipedia />
            </div>
          </IdContextProvider>
        </div>
      )}
    </div>
  );
}
