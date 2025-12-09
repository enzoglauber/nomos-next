'use client';

import { ReactNode, useState } from 'react';
import { createContext, useContext } from 'react';

import { DeputiesFilter } from '../interfaces/deputies-filter';

export interface IStore {
  page: number;
  items: string;
  filter?: DeputiesFilter;
  setPage: (page: number) => void;
  setFilter: (filter: DeputiesFilter) => void;
  setItems: (items: string) => void;
}

interface StoreProps {
  children: ReactNode;
}

const INITIAL: IStore = {
  page: 1,
  items: '10',
  filter: {
    party: '',
    deputy: '',
    uf: '',
  },
  setPage: () => {},
  setItems: () => {},
  setFilter: () => {},
};

export const DeputiesContext = createContext<IStore>(INITIAL);

export const DeputiesContextProvider = ({ children }: StoreProps) => {
  const [state, setState] = useState(INITIAL);

  const updateStore = (key: string, value: any) => {
    setState((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const value: IStore = {
    page: state.page,
    items: state.items,
    filter: state.filter,
    setPage: (page: number) => updateStore('page', page),
    setFilter: (filter: DeputiesFilter) => updateStore('filter', filter),
    setItems: (items: string) => updateStore('items', items),
  };

  return (
    <DeputiesContext.Provider value={value}>
      {children}
    </DeputiesContext.Provider>
  );
};

export const useDeputiesContext = () => {
  return useContext(DeputiesContext);
};
