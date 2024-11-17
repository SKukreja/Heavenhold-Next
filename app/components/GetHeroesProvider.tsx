'use client';

import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { GetAllHeroesQuery, GetMetaVotesQuery } from '#/graphql/generated/types';
import { usePathname } from 'next/navigation';

interface HeroesContextType {
  data: GetAllHeroesQuery | null;
  votes: GetMetaVotesQuery | null;
}

const HeroesContext = createContext<HeroesContextType | undefined>(undefined);

interface HeroesProviderProps {
  initialData: GetAllHeroesQuery;
  initialVotes: GetMetaVotesQuery;
  children: React.ReactNode;
}

export function HeroesProvider({ initialData, initialVotes, children }: HeroesProviderProps) {
  const pathname = usePathname();

  // Memoize the initial data
  const memoizedData = useMemo(() => initialData, [initialData]);
  const memoizedVotes = useMemo(() => initialVotes, [initialVotes]);

  // Calculate the hero background based on the URL path
  const heroBG = useMemo(() => {
    const pathSegments = pathname.split('/');
    const heroesIndex = pathSegments.indexOf('heroes');
    const slug = (heroesIndex >= 0 && pathSegments.length > heroesIndex + 1) ? pathSegments[heroesIndex + 1] : '';
    const fetchedHero = memoizedData?.heroes?.nodes.find((h) => h.slug === slug) ?? null;
    return fetchedHero?.heroInformation?.background?.node?.sourceUrl ?? "";
  }, [pathname, memoizedData]);

  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    setBgLoaded(false); // Reset the loading state when the background image changes
    if (heroBG) {
      const img = new Image();
      img.src = heroBG;
      img.onload = () => setBgLoaded(true);
    } else {
      setBgLoaded(true); // If there's no image, consider it as loaded
    }
  }, [heroBG]);

  return (
    <HeroesContext.Provider value={{ data: memoizedData, votes: memoizedVotes }}>
      <div 
        className={`fixed z-0 w-full h-[calc(100vh)] pointer-events-none after:pointer-events-none bg-cover bg-no-repeat bg-center after:bg-black after:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] after:[background-size:12px_12px] after:opacity-90 after:absolute after:inset-0 after:z-10 transition-opacity duration-2000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}
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
