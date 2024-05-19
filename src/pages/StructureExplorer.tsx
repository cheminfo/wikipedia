import { Dispatch, SetStateAction, useState } from 'react';

import About from '../components/About';
import HelpDialog from '../components/HelpDialog';
import { DrawStructure } from '../components/StructureExplorer/DrawStructure';
import { MoleculeList } from '../components/StructureExplorer/MoleculeList';
import { Wikipedia } from '../components/StructureExplorer/Wikipedia';
import { useDataContext } from '../contexts/data_context';

interface StructureExplorerProps {
  showAbout: boolean;
  setShowAbout: Dispatch<SetStateAction<boolean>>;
}

export function StructureExplorer({
  showAbout,
  setShowAbout,
}: StructureExplorerProps) {
  const { loading } = useDataContext();
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="">
      {loading ? (
        <div className="-mt-12 flex h-screen flex-col items-center justify-center">
          <img src="loading.gif" />
        </div>
      ) : (
        <div>
          <About showAbout={showAbout} setShowAbout={setShowAbout} />
          <HelpDialog showHelp={showHelp} setShowHelp={setShowHelp} />
          <div className="px-10 pt-5 sm:px-20 xl:px-28 2xl:px-60">
            <div className="flex flex-col justify-center lg:flex-row lg:space-x-5">
              <DrawStructure setShowHelp={setShowHelp} />
              <MoleculeList />
            </div>
            <Wikipedia />
          </div>
        </div>
      )}
    </div>
  );
}
