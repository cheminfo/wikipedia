import { Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { StructureEditor } from 'react-ocl/full';
import useResizeObserver, { ObservedSize } from 'use-resize-observer';

import { SearchType, useMoleculeContext } from '../../hooks/MoleculeContext';
import SimpleTable from '../SimpleTable';

interface HelpButtonProps {
  setShowHelp: Dispatch<SetStateAction<boolean>>;
}

interface DrawStructureProps extends HelpButtonProps {}

function Search() {
  const { search, setSearch } = useMoleculeContext();
  return (
    <form className="flex items-center space-x-2">
      <label>Search mode :</label>
      <select
        name="search"
        value={search}
        onChange={(e) => {
          if (
            ['similarity', 'exact', 'substructure'].includes(e.target.value)
          ) {
            setSearch(e.target.value as SearchType);
          }
        }}
        className="h-6 w-36 cursor-pointer rounded-lg px-2 py-1 text-sm font-normal focus:outline-none"
      >
        <option value="substructure">Substructure</option>
        <option value="exact">Exact structure</option>
        <option value="similarity">Similarity</option>
      </select>
    </form>
  );
}

function Board() {
  const { id, idCode, setIdAndIdCode } = useMoleculeContext();
  const [boardWidth, setBoardWidth] = useState(470);

  const handleResize = (refObs: ObservedSize) =>
    setBoardWidth(refObs.width || 470);

  const { ref } = useResizeObserver<HTMLDivElement>({
    onResize: (refObs) => {
      handleResize(refObs);
    },
  });

  return (
    <div key={id} className="lg:w-[470px]" ref={ref}>
      <StructureEditor
        height={490}
        width={boardWidth}
        fragment
        initialIDCode={idCode}
        onChange={(molfile, molecule) => {
          setIdAndIdCode({ id, idCode: molecule.getIDCode() });
        }}
      />
    </div>
  );
}

function HelpButton({ setShowHelp }: HelpButtonProps) {
  return (
    <button type="button" className="flex" onClick={() => setShowHelp(true)}>
      <AiOutlineQuestionCircle className="transform text-xl text-darkblue transition-all duration-150 ease-in-out hover:scale-125" />
    </button>
  );
}

export function DrawStructure({ setShowHelp }: DrawStructureProps) {
  return (
    <SimpleTable
      title="Draw a structure"
      help={<HelpButton setShowHelp={setShowHelp} />}
      option={<Search />}
      className="h-[505px] bg-lightblue"
    >
      <Board />
    </SimpleTable>
  );
}
