"use client";

import { useState, useContext, useMemo, useEffect } from "react";
import Loading from "#/app/components/loading";
import { Hero, Item, Team } from "#/graphql/generated/types";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import MetaList from "./[uri]/MetaList";
import Link from "next/link";
import useAuth from "../components/UseAuth";

export default function Page() {
  const { data: heroesData } = useHeroes();
  const { loggedIn, loading } = useAuth();

  useEffect(() => {
    console.log("loggedIn", loggedIn);
  }, [loggedIn, loading])

  const heroes = useMemo(() => {
    return [...(heroesData?.heroes?.nodes ?? [])] as Hero[];
  }, [heroesData]);

  return (
    <div
      id="TierListPage"      
    >        
        <MetaList categoryId={0} heroes={heroes} />
    </div>    
  );
}
