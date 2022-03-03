import { Children, QueryContextType } from '@Types/context';
import React, { createContext, useContext, useState } from 'react';

const QueryContext = createContext<QueryContextType>({ query: '', update: () => {} });

export const QueryProvider = ({ children }: Children) => {
  const [query, setQuery] = useState<string>('');

  const update = (overwrite: string) => {
    setQuery(overwrite);
  };

  return <QueryContext.Provider value={{ query, update }}>{children}</QueryContext.Provider>;
};

export const useQuery = () => {
  const context = useContext(QueryContext);

  if (!context) throw new Error('QueryContext must be called from within the QueryContextProvider');

  return context;
};

// https://gist.github.com/ELI7VH/8ca0e90e52e902e91c3776ad7b63ad8e
