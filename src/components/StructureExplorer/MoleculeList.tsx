/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoleculesDB } from 'openchemlib-utils';
import { CSSProperties, useEffect, useMemo, useState } from 'react';
import { MdClose } from 'react-icons/md';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid as Grid } from 'react-window';
import useResizeObserver from 'use-resize-observer';

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
    molecules.push(data);
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

  const BREAKPOINT1 = 1100;
  const BREAKPOINT2 = 1024;
  const BREAKPOINT3 = 700;

  const [colItemsCount, setColItemsCount] = useState(
    (window.innerWidth <= BREAKPOINT1 && window.innerWidth > BREAKPOINT2) ||
      window.innerWidth <= BREAKPOINT3
      ? 2
      : 3,
  );

  const handleResize = () =>
    setColItemsCount(
      (window.innerWidth <= BREAKPOINT1 && window.innerWidth > BREAKPOINT2) ||
        window.innerWidth <= BREAKPOINT3
        ? 2
        : 3,
    );

  const { ref } = useResizeObserver<HTMLDivElement>({
    onResize: () => {
      handleResize();
    },
  });

  function getRowCount(molLen: number) {
    if (molLen % colItemsCount === 0) {
      return molLen / colItemsCount;
    } else {
      return molLen / colItemsCount + 1;
    }
  }

  return (
    <div className="h-[434px] w-full overflow-x-hidden" ref={ref}>
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            columnCount={colItemsCount}
            columnWidth={
              colItemsCount === 3
                ? width / colItemsCount - 2
                : width / colItemsCount - 3
            }
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

export function MoleculeList({
  molecules,
  idCode,
  search,
  db,
}: MoleculeListProps): JSX.Element {
  const [filter, setFilter] = useState('');

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

  const mols = useMemo(() => {
    const result = searchMols();
    return filterMols(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, search, idCode]);

  return (
    <SimpleTable
      option={<Filter filter={filter} setFilter={setFilter} />}
      className="h-full w-full"
      content={<Molecules molecules={mols} />}
    />
  );
}