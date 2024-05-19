import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export type SearchType = 'substructure' | 'exact' | 'similarity';

interface MoleculeContext {
  selectedId: number | null;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
  selectedTitle: string;
  setSelectedTitle: Dispatch<SetStateAction<string>>;
  id: number;
  idCode: string;
  setIdAndIdCode: Dispatch<SetStateAction<{ id: number; idCode: string }>>;
  search: SearchType;
  setSearch: Dispatch<SetStateAction<SearchType>>;
}

export const moleculeContext = createContext<MoleculeContext>({
  selectedId: null,
  setSelectedId: () => undefined,
  selectedTitle: '',
  setSelectedTitle: () => undefined,
  id: 0,
  idCode: '',
  setIdAndIdCode: () => undefined,
  search: 'substructure',
  setSearch: () => undefined,
});

export function useMoleculeContext() {
  return useContext(moleculeContext);
}
