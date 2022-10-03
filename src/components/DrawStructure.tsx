import Table from './Table';

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
  return <div>Draw</div>;
}

export function DrawStructure(): JSX.Element {
  return (
    <Table
      title="Draw a structure"
      option={<Search />}
      className="w-[950px]"
      content={<Board />}
    />
  );
}
