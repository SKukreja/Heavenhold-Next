// components/GetHeroesProvider.tsx
"use client";

import React, { createContext, useContext } from 'react';
import { useGetAllHeroesSuspenseQuery, GetAllHeroesQuery } from '#/graphql/generated/types';

interface HeroesContextType {
  data: GetAllHeroesQuery | null;
}

const HeroesContext = createContext<HeroesContextType | undefined>(undefined);

export function HeroesProvider({ children }: React.PropsWithChildren<{}>) {
  const { data } = useGetAllHeroesSuspenseQuery();

  // Manage data loading state
  if (!data) {
    return <div>Loading...</div>; // or handle loading state as needed
  }

  return (
    <HeroesContext.Provider value={{ data }}>
      {children}
    </HeroesContext.Provider>
  );
}

export function useHeroes() {
  const context = useContext(HeroesContext);
  if (!context) {
    throw new Error('useHeroes must be used within a HeroesProvider');
  }
  return context;
}
