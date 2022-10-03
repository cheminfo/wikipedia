import { MdClose } from 'react-icons/md';

import { MoleculeInfo } from './MoleculeInfo';
import Table from './Table';

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

function Molecules(): JSX.Element {
  return (
    <div className="scrollbar grid max-h-96 grid-cols-4 overflow-y-scroll">
      <MoleculeInfo />
      <MoleculeInfo />
      <MoleculeInfo />
      <MoleculeInfo />
      <MoleculeInfo />
      <MoleculeInfo />
      <MoleculeInfo />
      <MoleculeInfo />
      <MoleculeInfo />
      <MoleculeInfo />
      <MoleculeInfo />
      <MoleculeInfo />
      <MoleculeInfo />
      <MoleculeInfo />
    </div>
  );
}

function Pagination(): JSX.Element {
  return <div className="flex justify-center py-1">Molecule n°</div>;
}

export function Grid(): JSX.Element {
  return (
    <Table
      option={<Filter />}
      className="w-full"
      footer={<Pagination />}
      content={<Molecules />}
    />
  );
}
