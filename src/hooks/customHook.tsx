import React, { createContext, useContext, ReactNode, useState } from 'react';

interface HooksProps {
  quantity: number;
  setQuantityHook(quantity: number): void;
}

const HooksContext = createContext<HooksProps>({} as HooksProps);

interface HooksProviderProps {
  children: ReactNode;
}

function HooksProvider({ children }: HooksProviderProps) {
  const [quantity, setQuantity] = useState(0);

  const setQuantityHook = (quantity: number) => setQuantity(quantity);

  return (
    <HooksContext.Provider value={{ quantity, setQuantityHook }}>
      {children}
    </HooksContext.Provider>
  );
}

function useCustomHook() {
  const context = useContext(HooksContext);
  return context;
}

export { useCustomHook, HooksProvider };
