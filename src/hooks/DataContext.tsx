import OCL from 'openchemlib/full';
import { MoleculesDB } from 'openchemlib-utils';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ExtendedWikipediaJson, fetchData } from './fetch_data';

interface State {
  allData: ExtendedWikipediaJson;
  loading: boolean;
  db: MoleculesDB;
}

const initData: ExtendedWikipediaJson = {
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
  const [allData, setAllData] = useState<ExtendedWikipediaJson>(initData);
  const [loading, setLoading] = useState(true);
  const [db, setDb] = useState(() => new MoleculesDB(OCL));

  useEffect(() => {
    void fetchData()
      .then(({ data, moleculesDB }) => {
        setAllData(data);
        setDb(moleculesDB);
      })
      .catch(() => {
        // eslint-disable-next-line no-alert,no-restricted-globals
        alert('An error has occurred while fetching the data');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const value = useMemo(
    () => ({ allData, loading, db }),
    [allData, loading, db],
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
