import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface ErrorState {
  hoverId: number | null;
  setHoverId: React.Dispatch<React.SetStateAction<number | null>>;
}

const ErrorContext = createContext<ErrorState>({
  hoverId: null,
  setHoverId: () => undefined,
});

export function useErrorContext() {
  return useContext(ErrorContext);
}

export function ErrorContextProvider({ children }: { children: ReactNode }) {
  const [hoverId, setHoverId] = useState<number | null>(null);
  const value = useMemo(() => ({ hoverId, setHoverId }), [hoverId, setHoverId]);
  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
}
