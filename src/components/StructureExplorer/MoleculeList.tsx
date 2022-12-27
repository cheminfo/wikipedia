/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoleculesDB } from 'openchemlib-utils';
import { CSSProperties, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid as Grid } from 'react-window';

import { IMolecule } from '../../hooks/DataContext';
import { useIdContext } from '../../hooks/IdContext';
import { SearchType } from '../../pages/StructureExplorer';
import SimpleTable from '../SimpleTable';

import { MoleculeInfo } from './MoleculeInfo';

interface FilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

interface MoleculesProps {
  molecules: IMolecule[];
}
interface MoleculeListProps extends MoleculesProps {
  idCode: string;
  search: SearchType;
  db: MoleculesDB;
}
interface CellProps {
  columnIndex: number;
  rowIndex: number;
  style: CSSProperties;
}

function Filter({ filter, setFilter }: FilterProps): JSX.Element {
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

const cell =
  (molecules: IMolecule[]) =>
  ({ columnIndex, rowIndex, style }: CellProps) => {
    if (columnIndex + rowIndex * 3 < molecules.length) {
      const mol = molecules[columnIndex + rowIndex * 3];
      return (
        <div style={style} className="overflow-x-hidden">
          {mol && <MoleculeInfo mol={mol} />}
        </div>
      );
    }
    return null;
  };

function dbToMolecules(moleculeDb: any): IMolecule[] {
  const molecules: IMolecule[] = [];
  for (const entry of moleculeDb) {
    const data = entry.data;
    molecules.push({
      id: data.id,
      code: data.code,
      smiles: data.smiles,
      mf: { type: 'string', value: data.mf },
      em: data.em,
      mw: entry.properties.mw,
      actID: { type: 'string', value: entry.idCode },
      // eslint-disable-next-line camelcase
      act_idx: entry.index,
    });
  }
  return molecules;
}

function Molecules({ molecules }: MoleculesProps): JSX.Element {
  const { selectedTitle, setSelectedTitle } = useIdContext();

  useEffect(() => {
    if (selectedTitle === '') {
      setSelectedTitle(molecules[0]?.code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getRowCount(molLen: number) {
    if (molLen % 3 === 0) {
      return molLen / 3;
    } else {
      return molLen / 3 + 1;
    }
  }
  const colItemsCount = 3;
  return (
    <div className="h-96 w-full overflow-x-hidden">
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            columnCount={colItemsCount}
            columnWidth={width / colItemsCount - 2}
            rowCount={getRowCount(molecules.length) || 0}
            rowHeight={height / 2}
            width={width}
            height={height}
            className="scrollbar overflow-x-hidden"
          >
            {cell(molecules)}
          </Grid>
        )}
      </AutoSizer>
    </div>
  );
}

function Pagination(): JSX.Element {
  // TO DO: add pagination
  return <div className="flex justify-center py-1">Page x/x</div>;
}

export function MoleculeList({
  molecules,
  idCode,
  search,
  db,
}: MoleculeListProps): JSX.Element {
  const [filter, setFilter] = useState('');
  const [mols, setMols] = useState(molecules);

  function searchMols(): IMolecule[] {
    if (idCode !== 'd@' && idCode !== null && idCode !== '') {
      return dbToMolecules(
        db.search(idCode, {
          format: 'idCode',
          mode: search,
        }),
      );
    }
    return molecules;
  }

  function filterMols(molecules: IMolecule[] = mols): IMolecule[] {
    return molecules.filter((mol) =>
      mol.code.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  }

  useEffect(() => {
    const result = searchMols();
    setMols(filterMols(result));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, search, idCode]);

  return (
    <SimpleTable
      option={<Filter filter={filter} setFilter={setFilter} />}
      className="w-full"
      footer={<Pagination />}
      content={<Molecules molecules={mols} />}
    />
  );
}
