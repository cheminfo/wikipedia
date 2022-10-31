import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';

import { IMolecule } from '../../hooks/DataContext';
import { useIdContext } from '../../hooks/IdContext';
import SimpleTable from '../SimpleTable';

import { MoleculeInfo } from './MoleculeInfo';

interface IFilter {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

function Filter({ filter, setFilter }: IFilter): JSX.Element {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-[#0A4E7A]">Filter by name :</div>
      <div className="flex h-6 w-36 items-center rounded-lg bg-white p-1 text-sm">
        <input
          type="text"
          name="filter"
          className="h-full w-full px-2 font-normal focus:outline-none"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        <MdClose className="cursor-pointer" />
      </div>
    </div>
  );
}

interface Props {
  molecules: IMolecule[];
}

function Molecules({ molecules }: Props): JSX.Element {
  const { selectedId, setSelectedId } = useIdContext();

  useEffect(() => {
    setSelectedId(selectedId || molecules[0].id);
  }, [molecules, selectedId, setSelectedId]);

  return (
    <div className="scrollbar grid h-96 grid-cols-3 overflow-y-auto overflow-x-hidden">
      {molecules.map((mol, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <MoleculeInfo mol={mol} key={key} />
      ))}
    </div>
  );
}

function Pagination(): JSX.Element {
  // TO DO: add pagination
  return <div className="flex justify-center py-1">Page x/x</div>;
}

export function MoleculeList({ molecules }: Props): JSX.Element {
  const [filter, setFilter] = useState('');
  const [mols, setMols] = useState(molecules);

  useEffect(() => {
    setMols(
      molecules.filter((mol) =>
        mol.code.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
      ),
    );
  }, [filter, molecules]);

  return (
    <SimpleTable
      option={<Filter filter={filter} setFilter={setFilter} />}
      className="w-full"
      footer={<Pagination />}
      content={<Molecules molecules={mols.slice(0, 10)} />}
    />
  );
}
