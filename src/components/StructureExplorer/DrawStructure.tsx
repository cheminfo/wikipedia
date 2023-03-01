import { useState } from 'react';
import { StructureEditor } from 'react-ocl/full';
import useResizeObserver, { ObservedSize } from 'use-resize-observer';

import { SearchType, useMoleculeContext } from '../../hooks/MoleculeContext';
import SimpleTable from '../SimpleTable';

function Search(): JSX.Element {
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

function Board(): JSX.Element {
  const { idCode, setIdCode } = useMoleculeContext();
  const [boardWidth, setBoardWidth] = useState(470);

  const handleResize = (refObs: ObservedSize) =>
    setBoardWidth(refObs.width || 470);

  const { ref } = useResizeObserver<HTMLDivElement>({
    onResize: (refObs) => {
      handleResize(refObs);
    },
  });

  return (
    <div key={idCode} className="lg:w-[470px]" ref={ref}>
      <StructureEditor
        height={490}
        width={boardWidth}
        initialIDCode={idCode}
        onChange={(molfile, molecule) => {
          setIdCode(molecule.getIDCode());
        }}
      />
    </div>
  );
}

export function DrawStructure(): JSX.Element {
  return (
    <SimpleTable
      title="Draw a structure"
      option={<Search />}
      className="h-[505px] bg-lightblue"
    >
      <Board />
    </SimpleTable>
  );
}
