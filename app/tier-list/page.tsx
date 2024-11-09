"use client";

import { useMemo } from "react";
import Loading from "#/app/components/loading";
import { Hero } from "#/graphql/generated/types";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import MetaList from "./[uri]/MetaList";
import { useUser } from '#/app/components/UserContext';

export default function Page() {
  const { data: heroesData } = useHeroes();
  console.log(heroesData);
  const { user } = useUser();

  const heroes = useMemo(() => {
    return [...(heroesData?.heroes?.nodes ?? [])] as Hero[];
  }, [heroesData]);

  if (!heroesData) {
    return <Loading />;
  }

  return (
    <div
      id="TierListPage"      
    >        
        <MetaList categoryId={0} heroes={heroes} loggedInUserId={user?.user_id ?? null} />
    </div>    
  );
}
