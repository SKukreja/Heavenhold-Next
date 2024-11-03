"use client";

import { useState, useContext, useMemo, useEffect } from "react";
import Loading from "#/app/components/loading";
import { Hero, Item, Team } from "#/graphql/generated/types";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import MetaList from "./[uri]/MetaList";
import { useUser } from '#/app/components/UserContext';

export default function Page() {
  const { data: heroesData } = useHeroes();
  const { user } = useUser();

  const heroes = useMemo(() => {
    return [...(heroesData?.heroes?.nodes ?? [])] as Hero[];
  }, [heroesData]);

  return (
    <div
      id="TierListPage"      
    >        
        <MetaList categoryId={0} heroes={heroes} loggedInUserId={user?.user_id ?? null} />
    </div>    
  );
}
