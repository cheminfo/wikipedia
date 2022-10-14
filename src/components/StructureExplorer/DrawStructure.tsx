import { StructureEditor } from 'react-ocl/full';

import SimpleTable from '../SimpleTable';

function Search(): JSX.Element {
  return (
    <form className="flex items-center space-x-2">
      <label>Search mode :</label>
      <select
        name="search"
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
  return (
    <div className="mt-6">
      <StructureEditor height={385} width={510} />
    </div>
  );
}

export function DrawStructure(): JSX.Element {
  return (
    <SimpleTable
      title="Draw a structure"
      option={<Search />}
      className="w-[950px]"
      content={<Board />}
    />
  );
}
