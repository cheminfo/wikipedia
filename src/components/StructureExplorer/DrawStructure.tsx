import { StructureEditor } from 'react-ocl/full';

import SimpleTable from '../SimpleTable';

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

interface DrawStructureProps {
  setIdCode: React.Dispatch<React.SetStateAction<string>>;
  setIdx: React.Dispatch<React.SetStateAction<number[]>>;
  setMw: React.Dispatch<React.SetStateAction<number>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

interface BoardProps {
  setIdCode: React.Dispatch<React.SetStateAction<string>>;
  setIdx: React.Dispatch<React.SetStateAction<number[]>>;
  setMw: React.Dispatch<React.SetStateAction<number>>;
}

function Search({ search, setSearch }: SearchProps): JSX.Element {
  return (
    <form className="flex items-center space-x-2">
      <label>Search mode :</label>
      <select
        name="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
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

function Board({ setIdCode, setIdx, setMw }: BoardProps): JSX.Element {
  return (
    <div className="mt-6">
      <StructureEditor
        height={385}
        width={510}
        onChange={(molfile, molecule) => {
          setIdCode(molecule.getIDCode());
          setIdx(molecule.getIndex());
          setMw(molecule.getMolweight());
        }}
      />
    </div>
  );
}

export function DrawStructure({
  setIdCode,
  setIdx,
  setMw,
  search,
  setSearch,
}: DrawStructureProps): JSX.Element {
  return (
    <SimpleTable
      title="Draw a structure"
      option={<Search search={search} setSearch={setSearch} />}
      className="w-[950px]"
      content={<Board setIdCode={setIdCode} setIdx={setIdx} setMw={setMw} />}
    />
  );
}
