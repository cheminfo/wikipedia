import { ReactNode, useMemo, useState } from 'react';

import { moleculeContext, SearchType } from './molecule_context';

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
    <moleculeContext.Provider value={value}>
      {children}
    </moleculeContext.Provider>
  );
}
