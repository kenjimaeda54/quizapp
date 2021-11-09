import React, { ReactNode } from 'react';
import { HooksProvider } from './customHook';

interface ContextProviderProps {
  children: ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps) {
  return <HooksProvider>{children}</HooksProvider>;
}
