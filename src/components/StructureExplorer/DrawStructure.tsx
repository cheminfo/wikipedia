import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useCanvasEditor } from 'react-ocl';

import type { SearchType } from '../../contexts/molecule_context.js';
import { useMoleculeContext } from '../../contexts/molecule_context.js';
import SimpleTable from '../SimpleTable.js';

function Search() {
  const { search, setSearch } = useMoleculeContext();
  return (
    <form className="flex items-center space-x-2">
      <label className="hidden sm:inline">Search by:</label>
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

function StructureEditor() {
  const { id, idCode, setIdAndIdCode, search } = useMoleculeContext();

  const [initialIdcode] = useState(idCode);
  const canvasEditor = useCanvasEditor({
    initialMode: 'molecule',
    inputFormat: 'idcode',
    inputValue: initialIdcode,
    fragment: search === 'substructure',
    onChange: (event) => {
      setIdAndIdCode({ id, idCode: event.getIdcode() });
    },
  });

  return (
    <div
      className="lg:w-[470px] h-full rounded-b-lg overflow-hidden"
      ref={canvasEditor.elementRef}
    />
  );
}

interface HelpButtonProps {
  setShowHelp: Dispatch<SetStateAction<boolean>>;
}

function HelpButton({ setShowHelp }: HelpButtonProps) {
  return (
    <button type="button" className="flex" onClick={() => setShowHelp(true)}>
      <AiOutlineQuestionCircle className="transform text-xl text-darkblue transition-all duration-150 ease-in-out hover:scale-125" />
    </button>
  );
}

export function DrawStructure({ setShowHelp }: HelpButtonProps) {
  const { id } = useMoleculeContext();
  return (
    <SimpleTable
      title="Draw a structure"
      help={<HelpButton setShowHelp={setShowHelp} />}
      option={<Search />}
      className="sm:h-[506px] h-[405px] flex flex-col bg-lightblue"
      height="flex-1 min-h-0"
    >
      <StructureEditor key={id} />
    </SimpleTable>
  );
}
