import OCL from 'openchemlib/full';
import { MoleculesDB } from 'openchemlib-utils';
import { ReactNode, useEffect, useMemo, useState } from 'react';

import { ExtendedWikipediaJson, fetchData } from '../hooks/fetch_data.js';

import { dataContext, initData } from './data_context.js';

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
      .catch((error: unknown) => {
        reportError(error);
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

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
}
