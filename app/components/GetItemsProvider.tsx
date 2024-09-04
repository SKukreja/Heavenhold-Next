// components/GetItemsProvider.tsx
"use client";

import React, { createContext, useContext } from 'react';
import { useGetAllItemsSuspenseQuery, GetAllItemsQuery } from '#/graphql/generated/types';

interface ItemsContextType {
  data: GetAllItemsQuery | null;
}

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export function ItemsProvider({ children }: React.PropsWithChildren<{}>) {
  const { data } = useGetAllItemsSuspenseQuery();

  // Manage data loading state
  if (!data) {
    return <div>Loading...</div>; // or handle loading state as needed
  }

  return (
    <ItemsContext.Provider value={{ data }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error('useItems must be used within a ItemsProvider');
  }
  return context;
}
