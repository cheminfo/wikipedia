import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface State {
  selectedId: number | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
}

const IdContext = createContext<State>({
  selectedId: null,
  setSelectedId: () => undefined,
});

export function useIdContext() {
  return useContext(IdContext);
}

export function IdContextProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const value = useMemo(
    () => ({ selectedId, setSelectedId }),
    [selectedId, setSelectedId],
  );
  return <IdContext.Provider value={value}>{children}</IdContext.Provider>;
}
