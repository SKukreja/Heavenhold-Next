// components/GetItemsProvider.tsx
"use client"; // Keep this directive

import React, { createContext, useContext, useMemo } from 'react';
import { GetAllItemsQuery } from '#/graphql/generated/types';

interface ItemsContextType {
  data: GetAllItemsQuery | null;
}

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

interface ItemsProviderProps {
  initialData: GetAllItemsQuery;
  children: React.ReactNode;
}

export function ItemsProvider({ initialData, children }: ItemsProviderProps) {
  // Use the server-side data as initial data
  const memoizedData = useMemo(() => initialData, [initialData]);

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
