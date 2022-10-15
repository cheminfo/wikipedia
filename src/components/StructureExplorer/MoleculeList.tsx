import { MdClose } from 'react-icons/md';

import { IMolecule } from '../../hooks/useGetData';
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

function Molecules(data: IMolecule): JSX.Element {
  return (
    <div className="scrollbar grid h-96 grid-cols-3 overflow-y-auto overflow-x-hidden">
      <MoleculeInfo {...data} />
    </div>
  );
}

function Pagination(): JSX.Element {
  // TO DO: add pagination
  return <div className="flex justify-center py-1">Molecule n°</div>;
}

export function MoleculeList(data: IMolecule): JSX.Element {
  return (
    <SimpleTable
      option={<Filter />}
      className="w-full"
      footer={<Pagination />}
      content={<Molecules {...data} />}
    />
  );
}
