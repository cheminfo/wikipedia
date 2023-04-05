import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export type SearchType = 'substructure' | 'exact' | 'similarity';

interface State {
  selectedId: number | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
  selectedTitle: string;
  setSelectedTitle: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  idCode: string;
  setIdAndIdCode: React.Dispatch<
    React.SetStateAction<{ id: number; idCode: string }>
  >;
  search: SearchType;
  setSearch: React.Dispatch<React.SetStateAction<SearchType>>;
}

const MoleculeContext = createContext<State>({
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
  return useContext(MoleculeContext);
}

export function MoleculeContextProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [idAndIdCode, setIdAndIdCode] = useState({ id: 0, idCode: '' });
  const [search, setSearch] = useState<SearchType>('substructure');

  const value = useMemo(
    () => ({
      selectedId,
      setSelectedId,
      selectedTitle,
      setSelectedTitle,
      id: idAndIdCode.id,
      idCode: idAndIdCode.idCode,
      setIdAndIdCode,
      search,
      setSearch,
    }),
    [
      selectedId,
      setSelectedId,
      selectedTitle,
      setSelectedTitle,
      idAndIdCode,
      setIdAndIdCode,
      search,
      setSearch,
    ],
  );
  return (
    <MoleculeContext.Provider value={value}>
      {children}
    </MoleculeContext.Provider>
  );
}
