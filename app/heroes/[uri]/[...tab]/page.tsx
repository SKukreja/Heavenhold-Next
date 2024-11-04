"use client";

import { useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import { Hero, Item, Team } from "#/graphql/generated/types";
import { useTeams } from "#/app/components/GetTeamsProvider";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import { useItems } from "#/app/components/GetItemsProvider";
import Bio from "./Bio";
import Abilities from "./Abilities";
import Teams from "./Teams";
import Costumes from "./Costumes";

interface PageProps {
  params: {
    uri: string;
    tab?: string[] | undefined;
  };
}

function capitalize(s: string): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function Page({ params }: PageProps) {
  const { data: heroesData } = useHeroes();
  const { data: itemsData } = useItems();
  const { data: teamsData } = useTeams();

  const heroes = useMemo(() => {
    return [...(heroesData?.heroes?.nodes ?? [])] as Hero[];
  }, [heroesData]);

  const items = useMemo(() => {
    return [...(itemsData?.items?.nodes ?? [])] as Item[];
  }, [itemsData]);

  const teams = useMemo(() => {
    return [...(teamsData?.teams?.nodes ?? [])] as Team[];
  }, [teamsData]);

  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedHero = heroes.find((hero) => hero.slug === params.uri);
    setHero(fetchedHero ?? null);
    setLoading(false);
  }, [params.uri, heroes]);

  const tabParam = params.tab ? params.tab[0] : undefined;
  const [activeTab, setActiveTab] = useState(capitalize(tabParam || "Bio"));

  useEffect(() => {
    setActiveTab(capitalize(tabParam || "Bio"));
  }, [tabParam]);

  if (loading) {
    return <Loading />;
  }

  if (!hero) {
    return <div>Error: Hero not found</div>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "Bio":
        return <Bio hero={hero} />;
      case "Abilities":
        return <Abilities hero={hero} items={items} />;
      case "Teams":
        return <Teams hero={hero} teams={teams} heroes={heroes} items={items} />;
      case "Costumes":
        return <Costumes hero={hero} />;
      case "Review":
        return <div></div>;
      case "Gallery":
        return <div></div>;
      default:
        return <Bio hero={hero} />;
    }
  };

  return (
      <div className="w-full h-auto">{renderTabContent()}</div>
  );
}
