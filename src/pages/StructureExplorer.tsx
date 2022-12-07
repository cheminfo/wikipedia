import { useState } from 'react';
import { Rings } from 'react-loader-spinner';

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

export function StructureExplorer({
  showAbout,
  setShowAbout,
}: StructureExplorerProps): JSX.Element {
  const {
    allData: {
      data: { molecules },
    },
    loading,
  } = useDataContext();

  const [idCode, setIdCode] = useState('');
  const [idx, setIdx] = useState<number[]>([]);
  const [mw, setMw] = useState(0);
  const [search, setSearch] = useState('');

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
          <IdContextProvider>
            <div className="px-20 pt-14 xl:px-28 2xl:px-60">
              <div className="flex justify-center space-x-5">
                <DrawStructure
                  setIdCode={setIdCode}
                  setIdx={setIdx}
                  setMw={setMw}
                  setSearch={setSearch}
                  search={search}
                />
                <MoleculeList
                  molecules={molecules}
                  idCode={idCode}
                  idx={idx}
                  mw={mw}
                  search={search}
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
