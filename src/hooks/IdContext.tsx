import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface State {
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
}

const IdContext = createContext<State>({
  selectedId: 0,
  setSelectedId: () => undefined,
});

export function useIdContext() {
  return useContext(IdContext);
}

export function IdContextProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<number>(0);
  const value = useMemo(
    () => ({ selectedId, setSelectedId }),
    [selectedId, setSelectedId],
  );
  return <IdContext.Provider value={value}>{children}</IdContext.Provider>;
}
