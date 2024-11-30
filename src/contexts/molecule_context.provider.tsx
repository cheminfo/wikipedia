import { ReactNode, useMemo, useState } from 'react';

import { WikipediaMolecule } from '../../dump/types.js';

import { moleculeContext, SearchType } from './molecule_context.js';

export function MoleculeContextProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedStructure, setSelectedStructure] =
    useState<WikipediaMolecule | null>(null);
  const [idAndIdCode, setIdAndIdCode] = useState({ id: 0, idCode: '' });
  const [search, setSearch] = useState<SearchType>('substructure');

  const value = useMemo(
    () => ({
      selectedId,
      setSelectedId,
      selectedStructure,
      setSelectedStructure,
      id: idAndIdCode.id,
      idCode: idAndIdCode.idCode,
      setIdAndIdCode,
      search,
      setSearch,
    }),
    [
      selectedId,
      setSelectedId,
      selectedStructure,
      setSelectedStructure,
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
