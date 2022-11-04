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
});

export function useDataContext() {
  return useContext(DataContext);
}

export function DataContextProvider({ children }: { children: ReactNode }) {
  const [allData, setAllData] = useState<DataState>(initData);
  const [loading, setLoading] = useState(true);

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

  const value = useMemo(() => ({ allData, loading }), [allData, loading]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
