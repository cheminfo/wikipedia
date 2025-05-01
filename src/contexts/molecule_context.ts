import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext } from 'react';

import type { WikipediaMolecule } from '../../dump/types.js';

export type SearchType = 'substructure' | 'exact' | 'similarity';

interface MoleculeContext {
  selectedId: number | null;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
  selectedStructure: WikipediaMolecule | null;
  setSelectedStructure: Dispatch<SetStateAction<WikipediaMolecule | null>>;
  id: number;
  idCode: string;
  setIdAndIdCode: Dispatch<SetStateAction<{ id: number; idCode: string }>>;
  search: SearchType;
  setSearch: Dispatch<SetStateAction<SearchType>>;
}

export const moleculeContext = createContext<MoleculeContext>({
  selectedId: null,
  setSelectedId: () => undefined,
  selectedStructure: null,
  setSelectedStructure: () => undefined,
  id: 0,
  idCode: '',
  setIdAndIdCode: () => undefined,
  search: 'substructure',
  setSearch: () => undefined,
});

export function useMoleculeContext() {
  return useContext(moleculeContext);
}
