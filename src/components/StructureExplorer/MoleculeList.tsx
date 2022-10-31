import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

import { IMolecule } from '../../hooks/DataContext';
import { useIdContext } from '../../hooks/IdContext';
import SimpleTable from '../SimpleTable';

import { MoleculeInfo } from './MoleculeInfo';

function Filter(): JSX.Element {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-[#0A4E7A]">Filter by :</div>
      <div className="flex h-6 w-36 items-center rounded-lg bg-white p-1 text-sm">
        <input
          type="text"
          name="filter"
          className="h-full w-full px-2 font-normal focus:outline-none"
        />
        <MdClose className="cursor-pointer" />
      </div>
    </div>
  );
}

function Pagination(): JSX.Element {
  // TO DO: add pagination

  return <div className="flex justify-center py-1">Molecule n°</div>;
}
interface Props {
  molecules: IMolecule[];
}

function Molecules({ molecules }: Props): JSX.Element {
  const { selectedId, setSelectedId } = useIdContext();

  useEffect(() => {
    setSelectedId(selectedId || molecules[0].id);
  }, []);

  return (
    <div className="scrollbar grid h-96 grid-cols-3 overflow-y-auto overflow-x-hidden">
      {molecules.slice(0, 10).map((mol, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <MoleculeInfo mol={mol} key={key} />
      ))}
    </div>
  );
}

export function MoleculeList({ molecules }: Props): JSX.Element {
  return (
    <SimpleTable
      option={<Filter />}
      className="w-full"
      footer={<Pagination />}
      content={<Molecules molecules={molecules} />}
    />
  );
}
