// app/heroes/[uri]/[...tab]/HeroPageClient.tsx

'use client';

import { useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import { Hero, Item, Team } from "#/graphql/generated/types";
import Bio from "./Bio";
import Abilities from "./Abilities";
import Teams from "./Teams";
import Costumes from "./Costumes";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import { useItems } from "#/app/components/GetItemsProvider";
import { useTeams } from "#/app/components/GetTeamsProvider";
import Gallery from "./Gallery";

interface HeroPageProps {
  activeTab: string;
  uri: string;
}

function capitalize(s: string): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function HeroPage({
  activeTab,
  uri,
}: HeroPageProps) {  
  // Fetch data on the server
  const { data: heroesData } = useHeroes();
  const { data: itemsData } = useItems();
  const { data: teamsData } = useTeams();

  const heroes = heroesData?.heroes?.nodes ?? [] as Hero[];
  const items = itemsData?.items?.nodes ?? [] as Item[];
  const teams = teamsData?.teams?.nodes ?? [] as Team[];

  const hero = heroes.find((hero) => hero.slug === uri);

  const [currentHero, setCurrentHero] = useState<Hero | null>(hero as Hero);
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentHero(hero as Hero);
  }, [hero]);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  if (!currentHero) {
    return <div>Error: Hero not found</div>;
  }

  const renderTabContent = () => {
    switch (currentTab) {
      case "Bio":
        return <Bio hero={currentHero} />;
      case "Abilities":
        return <Abilities hero={currentHero} items={items as Item[]} />;
      case "Teams":
        return (
          <Teams
            hero={currentHero}
            teams={teams as Team[]}
            heroes={heroes as Hero[]}
            items={items as Item[]} 
          />
        );
      case "Costumes":
        return <Costumes hero={currentHero} items={items as Item[]} />;
      case "Review":
        return <div></div>;
      case "Gallery":
        return <Gallery hero={currentHero} />;
      default:
        return <Bio hero={currentHero} />;
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!currentHero) {
    return <div>Error: Hero not found</div>;
  }

  return <div className="w-full h-auto">{renderTabContent()}</div>;
}
