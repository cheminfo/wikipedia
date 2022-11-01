// import { Molecule } from 'openchemlib/minimal';
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

interface Props {
  molecules: IMolecule[];
}
interface Iactid {
  molecules: IMolecule[];
  actid: string;
  search: string;
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
        <MdClose
          className="cursor-pointer"
          onClick={() => {
            setFilter('');
          }}
        />
      </div>
    </div>
  );
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

export function MoleculeList({
  molecules,
  actid,
  search,
}: Iactid): JSX.Element {
  const [filter, setFilter] = useState('');
  const [mols, setMols] = useState(molecules);

  // TO DO: actid.includes(mol.actID.value)) : replace includes by === after finding the bug (additional !B...)
  useEffect(() => {
    setMols(
      molecules.filter(
        (mol) =>
          mol.code.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) &&
          ((search === 'exact' &&
            (actid === '' ||
              actid === null ||
              actid.includes(mol.actID.value))) ||
            search === 'substructure' ||
            search === 'similarity'),
      ),
    );
    // eslint-disable-next-line no-console
    console.log(actid);
  }, [actid, filter, molecules, search]);

  return (
    <SimpleTable
      option={<Filter filter={filter} setFilter={setFilter} />}
      className="w-full"
      footer={<Pagination />}
      content={<Molecules molecules={mols.slice(0, 10)} />}
    />
  );
}
