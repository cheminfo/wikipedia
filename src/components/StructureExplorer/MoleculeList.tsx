import type { MoleculesDB } from 'openchemlib-utils';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { AutoSizer } from 'react-virtualized-auto-sizer';
import type { CellComponentProps, GridImperativeAPI } from 'react-window';
import { Grid, useGridRef } from 'react-window';

import { useDataContext } from '../../contexts/data_context.js';
import { useMoleculeContext } from '../../contexts/molecule_context.js';
import type { ExtendedWikipediaMolecule } from '../../hooks/fetch_data.js';
import { useResizeObserver } from '../../hooks/use_resize_observer.js';
import SimpleTable from '../SimpleTable.js';

import { MoleculeInfo } from './MoleculeInfo.js';

interface FilterProps {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

interface MoleculesProps {
  molecules: ExtendedWikipediaMolecule[];
  gridRef: RefObject<GridImperativeAPI | null>;
}

interface MolListFooterProps {
  filteredMolCount: number;
}

function MolListFooter({ filteredMolCount }: MolListFooterProps) {
  const {
    allData: {
      stats: { molecules },
    },
  } = useDataContext();
  return (
    <div className="flex justify-center gap-x-2 py-1">
      <div className="font-normal">Matching molecules:</div>
      <div>
        {filteredMolCount}/{molecules}
      </div>
    </div>
  );
}

function Filter({ filter, setFilter }: FilterProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex h-6 w-36 items-center rounded-lg bg-white p-1 text-sm">
        <input
          type="text"
          name="filter"
          className="h-full w-full px-2 font-normal focus:outline-hidden"
          placeholder="Molecule name"
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

type CellProps = CellComponentProps<{ molecules: ExtendedWikipediaMolecule[] }>;

function Cell({ columnIndex, rowIndex, style, molecules }: CellProps) {
  if (columnIndex + rowIndex * 3 < molecules.length) {
    const mol = molecules[columnIndex + rowIndex * 3];
    return (
      <div style={style} className="overflow-x-hidden">
        {mol && <MoleculeInfo mol={mol} />}
      </div>
    );
  }
  return null;
}

function dbToMolecules(
  moleculeDbSearchResult: ReturnType<MoleculesDB['search']>,
): ExtendedWikipediaMolecule[] {
  const molecules: ExtendedWikipediaMolecule[] = [];
  for (const entry of moleculeDbSearchResult) {
    const data = entry.data;
    molecules.push(data);
  }
  return molecules;
}

function Molecules({ gridRef, molecules }: MoleculesProps) {
  const { selectedStructure, setSelectedStructure } = useMoleculeContext();

  useEffect(() => {
    const firstMolecule = molecules[0];
    if (selectedStructure === null && firstMolecule) {
      setSelectedStructure(firstMolecule);
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

  const [ref, size] = useResizeObserver();
  // TODO: Check if this can be done without an effect.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(handleResize, [size]);

  function getRowCount(molLen: number) {
    if (molLen % colItemsCount === 0) {
      return molLen / colItemsCount;
    } else {
      return molLen / colItemsCount + 1;
    }
  }

  return (
    <div className="h-108.5 w-full overflow-x-hidden" ref={ref}>
      <AutoSizer
        renderProp={({ width = 1, height = 1 }) => (
          <Grid
            gridRef={gridRef}
            cellComponent={Cell}
            cellProps={{ molecules }}
            columnCount={colItemsCount}
            columnWidth={
              colItemsCount === 3
                ? width / colItemsCount - 2
                : width / colItemsCount - 3
            }
            rowCount={getRowCount(molecules.length) || 0}
            rowHeight={height / 2}
            className="scrollbar overflow-x-hidden"
            style={{ width, height }}
          />
        )}
      />
    </div>
  );
}

export function MoleculeList() {
  const {
    allData: {
      data: { molecules },
    },
    db,
  } = useDataContext();
  const [filter, setFilter] = useState('');
  const { search, idCode } = useMoleculeContext();

  const molSearchResult = useMemo(() => {
    // Empty idCodes with and without fragment.
    if (
      idCode !== 'dH' &&
      idCode !== 'd@' &&
      idCode !== null &&
      idCode !== ''
    ) {
      return dbToMolecules(
        db.search(idCode, {
          format: 'idCode',
          mode: search,
        }),
      );
    }
    return molecules;
  }, [idCode, molecules, db, search]);

  const molFiltered = useMemo(() => {
    return molSearchResult.filter((mol) =>
      mol.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  }, [filter, molSearchResult]);

  const gridRef = useGridRef(null);

  useLayoutEffect(() => {
    if (molFiltered.length !== 0) {
      gridRef.current?.scrollToRow({ index: 0 });
    }
  }, [molFiltered, gridRef]);

  return (
    <SimpleTable
      title="Search results"
      option={<Filter filter={filter} setFilter={setFilter} />}
      className="h-full w-full"
      footer={<MolListFooter filteredMolCount={molFiltered.length} />}
    >
      <Molecules gridRef={gridRef} molecules={molFiltered} />
    </SimpleTable>
  );
}
