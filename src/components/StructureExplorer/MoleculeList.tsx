import { SSSearcherWithIndex } from 'openchemlib/minimal';
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
interface IMolInfo {
  molecules: IMolecule[];
  actid: string;
  idx: number[];
  mw: number;
  search: string;
}

interface ISimilarity {
  idx: number[];
  molecules: IMolecule[];
  mw: number;
}

interface ISimObj {
  mol: IMolecule;
  sim: number;
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
  const { selectedTitle, setSelectedTitle } = useIdContext();

  useEffect(() => {
    setSelectedTitle(selectedTitle || molecules[0].code);
    // eslint-disable-next-line no-console
    console.log(selectedTitle);
  }, [molecules, selectedTitle, setSelectedTitle]);

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
  idx,
  mw,
}: IMolInfo): JSX.Element {
  const [filter, setFilter] = useState('');
  const [mols, setMols] = useState(molecules);

  function similarityTab({ idx, molecules, mw }: ISimilarity): IMolecule[] {
    let similarity;
    let simTab: ISimObj[] = [];
    molecules.forEach((mol) => {
      if (actid.includes(mol.actID.value)) {
        similarity = 1e10;
      } else {
        similarity =
          SSSearcherWithIndex.getSimilarityTanimoto(idx, mol.act_idx) * 100000 -
          Math.abs(mw - mol.mw) / 1000;
      }
      simTab = [...simTab, { mol, sim: similarity }];
    });
    simTab.sort((a, b) => b.sim - a.sim);
    return simTab.map((sim) => sim.mol);
  }

  // TO DO: actid.includes(mol.actID.value)) : replace includes by === after finding the bug (additional !B...)
  function searchExact(molecules: IMolecule[]): IMolecule[] {
    if (actid !== '' && actid !== null) {
      return molecules.filter((mol) => actid.includes(mol.actID.value));
    }
    return molecules;
  }

  // TO DO:
  function searchSubstructure(molecules: IMolecule[]): IMolecule[] {
    return molecules;
  }

  function searchSimilarity({ idx, molecules, mw }: ISimilarity): IMolecule[] {
    if (actid !== '' && actid !== null) {
      return similarityTab({ idx, molecules, mw });
    }
    return molecules;
  }

  function searchMols({ idx, molecules, mw }: ISimilarity): IMolecule[] {
    if (search === 'exact') {
      return searchExact(molecules);
    } else if (search === 'similarity') {
      return searchSimilarity({ idx, molecules, mw });
    } else {
      return searchSubstructure(molecules);
    }
  }

  function filterMols(molecules: IMolecule[]): IMolecule[] {
    return molecules.filter((mol) =>
      mol.code.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  }

  useEffect(() => {
    setMols(searchMols({ idx, molecules: filterMols(molecules), mw }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, search, actid]);

  return (
    <SimpleTable
      option={<Filter filter={filter} setFilter={setFilter} />}
      className="w-full"
      footer={<Pagination />}
      content={<Molecules molecules={mols?.slice(0, 10)} />}
    />
  );
}
