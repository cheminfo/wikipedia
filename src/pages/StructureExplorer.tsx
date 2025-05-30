import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import About from '../components/About.js';
import HelpDialog from '../components/HelpDialog.js';
import { DrawStructure } from '../components/StructureExplorer/DrawStructure.js';
import { MoleculeList } from '../components/StructureExplorer/MoleculeList.js';
import { Wikipedia } from '../components/StructureExplorer/Wikipedia.js';
import { useDataContext } from '../contexts/data_context.js';

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
    <div>
      {loading ? (
        <div className="-mt-12 flex h-screen flex-col items-center justify-center">
          <img src="loading.gif" />
        </div>
      ) : (
        <div>
          <About showAbout={showAbout} setShowAbout={setShowAbout} />
          <HelpDialog showHelp={showHelp} setShowHelp={setShowHelp} />
          <div className="px-2.5 pt-2.5 sm:pt-5 sm:px-20 xl:px-28 2xl:px-60">
            <div className="flex flex-col justify-center lg:flex-row lg:gap-5">
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
