import React, { useContext } from 'react';

export const MyContext = React.createContext(null);

export function useMyContext() {
  const ctx = useContext(MyContext);
  if (ctx == null) {
    throw new Error('useMyContext must be used inside a ContextProvider.');
  }
  return ctx;
}
