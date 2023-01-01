import { useEffect, useRef, useState } from 'react';
import { StructureEditor } from 'react-ocl/full';

import { SearchType } from '../../pages/StructureExplorer';
import SimpleTable from '../SimpleTable';

interface SearchProps {
  search: SearchType;
  setSearch: React.Dispatch<React.SetStateAction<SearchType>>;
}

interface DrawStructureProps extends SearchProps, BoardProps {}

interface BoardProps {
  setIdCode: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ search, setSearch }: SearchProps): JSX.Element {
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

function Board({ setIdCode }: BoardProps): JSX.Element {
  const BREAKPOINT = 1024;
  const refParent = useRef<HTMLDivElement>(null);

  const [boardWidth, setBoardWidth] = useState(
    window.innerWidth <= BREAKPOINT ? refParent.current?.offsetWidth : 470,
  );

  useEffect(() => {
    const handleResize = () =>
      setBoardWidth(
        window.innerWidth <= BREAKPOINT ? refParent.current?.offsetWidth : 470,
      );
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mt-8 lg:mt-10" ref={refParent}>
      <StructureEditor
        height={385}
        width={boardWidth}
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
  return (
    <SimpleTable
      title="Draw a structure"
      option={<Search search={search} setSearch={setSearch} />}
      className=""
      content={<Board setIdCode={setIdCode} />}
    />
  );
}
