import OCL from 'openchemlib/full';
import { MoleculesDB } from 'openchemlib-utils';
import { createContext, useContext } from 'react';

import type { ExtendedWikipediaJson } from '../hooks/fetch_data.js';

interface DataContext {
  allData: ExtendedWikipediaJson;
  loading: boolean;
  db: MoleculesDB;
}

export const initData: ExtendedWikipediaJson = {
  stats: {
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

export const dataContext = createContext<DataContext>({
  allData: initData,
  loading: true,
  db: new MoleculesDB(OCL),
});

export function useDataContext() {
  return useContext(dataContext);
}
