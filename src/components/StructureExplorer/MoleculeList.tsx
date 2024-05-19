/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CSSProperties,
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { MdClose } from 'react-icons/md';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid as Grid } from 'react-window';
import useResizeObserver from 'use-resize-observer';

import { useMoleculeContext } from '../../contexts/molecule_context';
import { useDataContext } from '../../hooks/DataContext';
import { ExtendedWikipediaMolecule } from '../../hooks/fetch_data';
import SimpleTable from '../SimpleTable';

import { MoleculeInfo } from './MoleculeInfo';

interface FilterProps {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

interface MoleculesProps {
  molecules: ExtendedWikipediaMolecule[];
  gridRef: RefObject<Grid>;
}

interface CellProps {
  columnIndex: number;
  rowIndex: number;
  style: CSSProperties;
}

interface MolListFooterProps {
  filteredMolCount: number;
}

function MolListFooter({ filteredMolCount }: MolListFooterProps) {
  const {
    allData: {
      count: { molecules },
    },
  } = useDataContext();
  return (
    <div className="flex justify-center gap-x-2 py-1">
      <div className="font-normal">Matching molecules :</div>
      <div className="">
        {filteredMolCount}/{molecules}
      </div>
    </div>
  );
}

function Filter({ filter, setFilter }: FilterProps) {
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
  (molecules: ExtendedWikipediaMolecule[]) =>
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

function dbToMolecules(moleculeDb: any): ExtendedWikipediaMolecule[] {
  const molecules: ExtendedWikipediaMolecule[] = [];
  for (const entry of moleculeDb) {
    const data = entry.data;
    molecules.push(data);
  }
  return molecules;
}

function Molecules({ gridRef, molecules }: MoleculesProps) {
  const { selectedTitle, setSelectedTitle } = useMoleculeContext();

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
            ref={gridRef}
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
      mol.code.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  }, [filter, molSearchResult]);

  const gridRef = useRef<Grid>(null);

  useLayoutEffect(() => {
    gridRef.current?.scrollTo({ scrollTop: 0 });
  }, [molFiltered]);

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
