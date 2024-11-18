// components/GetGuidesProvider.tsx
"use client";

import React, { createContext, useContext, useMemo } from 'react';
import { GetGuidesQuery } from '#/graphql/generated/types';

interface GuidesContextType {
  data: GetGuidesQuery | null;
}

const GuidesContext = createContext<GuidesContextType | undefined>(undefined);

interface GuidesProviderProps {
  initialData: GetGuidesQuery;
  children: React.ReactNode;
}

export function GuidesProvider({ initialData, children }: GuidesProviderProps) {
  const memoizedData = useMemo(() => initialData, [initialData]);


  return (
    <GuidesContext.Provider value={{ data: memoizedData }}>
      {children}
    </GuidesContext.Provider>
  );
}

export function useGuides() {
  const context = useContext(GuidesContext);
  if (!context) {
    throw new Error('useGuides must be used within a GuidesProvider');
  }
  return context;
}
