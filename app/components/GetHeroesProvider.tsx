// components/GetHeroesProvider.tsx
"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useGetAllHeroesSuspenseQuery, GetAllHeroesQuery } from '#/graphql/generated/types';
import { usePathname } from 'next/navigation';

interface HeroesContextType {
  data: GetAllHeroesQuery | null;
}

const HeroesContext = createContext<HeroesContextType | undefined>(undefined);

export function HeroesProvider({ children }: React.PropsWithChildren<{}>) {
  const { data } = useGetAllHeroesSuspenseQuery();
  const pathname = usePathname();
  
  const heroBG = useMemo(() => {
    const pathSegments = pathname.split('/');
    const heroesIndex = pathSegments.indexOf('heroes');
    const slug = (heroesIndex >= 0 && pathSegments.length > heroesIndex + 1) ? pathSegments[heroesIndex + 1] : '';
    const fetchedHero = data?.heroes?.nodes.find((h) => h.slug === slug) ?? null;
    return fetchedHero?.heroInformation?.background?.node?.sourceUrl ?? "";
  }, [pathname, data]);

  // Manage data loading state
  if (!data) {
    return <div>Loading...</div>; // Handle loading state as needed
  }

  return (
    <HeroesContext.Provider value={{ data }}>
      <div 
        className="fixed z-0 w-full h-[calc(100vh)] pointer-events-none after:pointer-events-none bg-cover bg-no-repeat bg-center after:bg-black after:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] after:[background-size:12px_12px] after:opacity-90 after:absolute after:inset-0 after:z-10"
        style={{
          backgroundImage: `url(${heroBG ?? ""})`,
        }}
      ></div>
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
