import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface State {
  selectedId: number | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
  selectedTitle: string;
  setSelectedTitle: React.Dispatch<React.SetStateAction<string>>;
}

const IdContext = createContext<State>({
  selectedId: null,
  setSelectedId: () => undefined,
  selectedTitle: '',
  setSelectedTitle: () => undefined,
});

export function useIdContext() {
  return useContext(IdContext);
}

export function IdContextProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const value = useMemo(
    () => ({ selectedId, setSelectedId, selectedTitle, setSelectedTitle }),
    [selectedId, setSelectedId, selectedTitle, setSelectedTitle],
  );
  return <IdContext.Provider value={value}>{children}</IdContext.Provider>;
}
