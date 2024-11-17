// app/heroes/[uri]/[...tab]/HeroPageClient.tsx

'use client';

import { useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import MetaList from "./MetaList";
import { Hero } from "#/graphql/generated/types";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import { useUser } from '#/app/components/UserContext';

interface TierListProps {
  activeTab: string;
  uri: string;
}

function capitalize(s: string): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function TierList({
  activeTab,
  uri,
}: TierListProps) {  
  // Fetch data on the server
  const { data: heroesData } = useHeroes();
  const { user } = useUser();

  const heroes = heroesData?.heroes?.nodes ?? [] as Hero[];
  const [loading, setLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);

  const categories = useMemo(() => {
    return [
        {
            id: 0,
            name: "General",
            slug: "general"
        },{
            id: 1,
            name: "Colosseum",
            slug: "colosseum"
        }, {
            id: 2,
            name: "Raid",
            slug: "raid"
        }, {
            id: 3,
            name: "Arena",
            slug: "arena"
        },{
            id: 4,
            name: "Boss Rush",
            slug: "boss-rush"
        },{
            id: 5,
            name: "Expedition",
            slug: "expedition"
        },{
            id: 6,
            name: "Death Match",
            slug: "death-match"
        }
    ];
  }, []);

  useEffect(() => {
    if (!uri) {
      return;
    }
    const urlCategory = categories.find((category) => category.slug.toLowerCase() === uri.toLowerCase());
    setCurrentCategory(urlCategory?.id ?? 0);
    setLoading(false);
  }, [uri]);  


  if (loading) {
    return <Loading />;
  }

  return <div className="w-full h-auto"><MetaList categoryId={currentCategory} /></div>;
}
