import { useState, useEffect } from 'react';
import { StructureEditor } from 'react-ocl/full';
import useResizeObserver, { ObservedSize } from 'use-resize-observer';
import { useIdContext } from '../../hooks/IdContext';

import { SearchType } from '../../pages/StructureExplorer';
import SimpleTable from '../SimpleTable';

interface SearchProps {
  search: SearchType;
  setSearch: React.Dispatch<React.SetStateAction<SearchType>>;
}

interface DrawStructureProps extends SearchProps {
  setIdCode: React.Dispatch<React.SetStateAction<string>>;
}

interface BoardProps {
  setIdCode: React.Dispatch<React.SetStateAction<string>>;
  simIdCode: string;
}

function Search({ search, setSearch }: SearchProps): JSX.Element {
  return (
    <form className="flex items-center space-x-2">
      <label>Search mode :</label>
      <select
        name="search"
        value={search}
        onChange={(e) => {
          if (['similarity', 'exact', 'substructure'].includes(e.target.value))
            setSearch(e.target.value as SearchType);
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

function Board({ setIdCode, simIdCode }: BoardProps): JSX.Element {
  const [boardWidth, setBoardWidth] = useState(470);

  const handleResize = (refObs: ObservedSize) =>
    setBoardWidth(refObs.width || 470);

  const { ref } = useResizeObserver<HTMLDivElement>({
    onResize: (refObs) => {
      handleResize(refObs);
    },
  });

  return (
    <div key={simIdCode} className="mt-8 lg:mt-10 lg:w-[470px]" ref={ref}>
      <StructureEditor
        height={385}
        width={boardWidth}
        initialIDCode={simIdCode}
        onChange={(molfile, molecule) => {
          setIdCode(molecule.getIDCode());
        }}
      />
    </div>
  );
}

export function DrawStructure({
  setIdCode,
  search,
  setSearch,
}: DrawStructureProps): JSX.Element {
  const { simIdCode } = useIdContext();

  useEffect(() => {
    setIdCode(simIdCode);
    setSearch('similarity');
  }, [simIdCode]);

  return (
    <SimpleTable
      title="Draw a structure"
      option={<Search search={search} setSearch={setSearch} />}
    >
      <Board setIdCode={setIdCode} simIdCode={simIdCode} />
    </SimpleTable>
  );
}
