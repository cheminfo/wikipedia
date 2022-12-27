import OCL from 'openchemlib';
import { MoleculesDB } from 'openchemlib-utils';
import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';

export interface IMolecule {
  id: number;
  code: string;
  smiles: string;
  mf: { type: string; value: string };
  mw: number;
  em: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  act_idx: number[];
  actID: { type: string; value: string };
}

interface DataState {
  count: {
    date: string;
    molecules: number;
    errors: number;
    nogood: number;
    notfound: number;
    dup: number;
  };
  data: {
    molecules: IMolecule[];
    errors: { id: number; smiles: string; error: string }[];
    dup: number[];
    notfound: number[];
    nogood: number[];
  };
}

interface State {
  allData: DataState;
  loading: boolean;
  db: MoleculesDB;
}

const initData = {
  count: {
    date: '',
    molecules: 0,
    errors: 0,
    nogood: 0,
    notfound: 0,
    dup: 0,
  },
  data: {
    molecules: [],
    errors: [],
    nogood: [],
    notfound: [],
    dup: [],
  },
};

const DataContext = createContext<State>({
  allData: initData,
  loading: true,
  db: new MoleculesDB(OCL),
});

export function useDataContext() {
  return useContext(DataContext);
}

export function DataContextProvider({ children }: { children: ReactNode }) {
  const [allData, setAllData] = useState<DataState>(initData);
  const [loading, setLoading] = useState(true);
  const [db, setDb] = useState(new MoleculesDB(OCL));

  useEffect(() => {
    void fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setAllData(myJson);

        const moleculesDB = new MoleculesDB(OCL);

        for (const entry of myJson.data.molecules) {
          const molecule = OCL.Molecule.fromIDCode(entry.actID.value, false);
          moleculesDB.pushEntry(
            molecule,
            {
              id: entry.id,
              code: entry.code,
              smiles: entry.smiles,
              mf: entry.mf.value,
              em: entry.em,
            },
            { index: entry.act_idx, idCode: entry.actID.value, mw: entry.mw },
          );
        }

        setDb(moleculesDB);
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        // eslint-disable-next-line no-alert
        alert('An error has occured while fetching the data');
      });
  }, []);

  const value = useMemo(
    () => ({ allData, loading, db }),
    [allData, loading, db],
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
