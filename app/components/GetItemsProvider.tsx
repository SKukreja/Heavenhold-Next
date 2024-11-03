// components/GetItemsProvider.tsx
"use client";

import React, { createContext, useContext, useMemo } from 'react';
import { useGetAllItemsSuspenseQuery, GetAllItemsQuery } from '#/graphql/generated/types';

interface ItemsContextType {
  data: GetAllItemsQuery | null;
}

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export function ItemsProvider({ children }: React.PropsWithChildren<{}>) {
  const { data } = useGetAllItemsSuspenseQuery();

  // Memoize the data to avoid unnecessary re-renders
  const memoizedData = useMemo(() => data, [data]);

  // Manage data loading state
  if (!memoizedData) {
    return <div>Loading...</div>; // Handle loading state as needed
  }

  return (
    <ItemsContext.Provider value={{ data: memoizedData }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error('useItems must be used within an ItemsProvider');
  }
  return context;
}
