import { useState } from 'react';
import { Rings } from 'react-loader-spinner';

import About from '../components/About';
import { DrawStructure } from '../components/StructureExplorer/DrawStructure';
import { MoleculeList } from '../components/StructureExplorer/MoleculeList';
import { Wikipedia } from '../components/StructureExplorer/Wikipedia';
import { useDataContext } from '../hooks/DataContext';
import { IdContextProvider } from '../hooks/IdContext';

interface Props {
  showAbout: boolean;
  setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

export function StructureExplorer({
  showAbout,
  setShowAbout,
}: Props): JSX.Element {
  const {
    allData: {
      data: { molecules },
    },
    loading,
  } = useDataContext();

  const [actid, setActid] = useState('');
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
            <div className="py-14 px-20 xl:px-28 2xl:px-60">
              <div className="flex justify-center space-x-5">
                <DrawStructure
                  setActid={setActid}
                  setSearch={setSearch}
                  search={search}
                />
                <MoleculeList
                  molecules={molecules}
                  actid={actid}
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
