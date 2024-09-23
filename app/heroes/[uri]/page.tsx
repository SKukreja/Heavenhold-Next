"use client";

import { Suspense, useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import Bio from "./Bio";
import Abilities from "./Abilities";
import { Hero } from "#/graphql/generated/types";
import { Team } from "#/graphql/generated/types";
import { Item } from "#/graphql/generated/types";
import { useTeams } from "#/app/components/GetTeamsProvider";
import { useHeroes } from '#/app/components/GetHeroesProvider';
import { useItems } from '#/app/components/GetItemsProvider';
import Teams from "./Teams";
import Costumes from "./Costumes";

interface HeroDetailsProps {
  params: {
    uri: string;
  };
}

export default function HeroDetails({ params }: HeroDetailsProps) {
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
  const [activeTab, setActiveTab] = useState("Bio");

  useEffect(() => {
    const loadHero = () => {
      const fetchedHero = heroes.find((hero) => hero.slug === params.uri);
      setHero(fetchedHero ?? null);
      setLoading(false);
    };
    loadHero();
  }, [params.uri, heroes]);

  const renderTabContent = () => {
    if (!hero) return null;
    switch (activeTab) {
      case "Bio":
        return <Bio hero={hero} />;
      case "Abilities":
        return <Abilities hero={hero} />;
      case "Review":
        return <div>Review</div>;
      case "Teams":
        return <Teams hero={hero} teams={teams} heroes={heroes} items={items} />;
      case "Costumes":
        return <Costumes hero={hero} />;
      default:
        return <Bio hero={hero} />;
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!hero) {
    return <div>Error: Hero not found</div>;
  }

  return (
    <main className="pt-32 lg:pt-0 h-auto lg:h-screen overflow-y-auto lg:overflow-hidden">
      <div className="p-8 hidden lg:flex hero-buttons w-full h-24 3xl:h-48 text-xl relative overflow-hidden gap-8 mb-8 z-20">
        <span onClick={() => setActiveTab("Bio")} className={`p-8 text-center cursor-pointer hover:bg-gray-800 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Bio" ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-400"}`}>Bio</span>
        <span onClick={() => setActiveTab("Abilities")} className={`p-8 text-center cursor-pointer hover:bg-gray-800 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Abilities" ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-400"}`}>Abilities</span>
        <span onClick={() => setActiveTab("Teams")} className={`p-8 text-center cursor-pointer hover:bg-gray-800 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Teams" ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-400"}`}>Teams</span>
        <span onClick={() => setActiveTab("Review")} className={`p-8 text-center cursor-pointer hover:bg-gray-800 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Review" ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-400"}`}>Review</span>
        <span onClick={() => hero.heroInformation?.costumes && setActiveTab("Costumes")} className={`p-8 text-center font-bold w-full h-full flex items-center justify-center card ${activeTab === "Costumes" ? "bg-gray-800 text-white" : hero.heroInformation?.costumes ? "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white cursor-pointer" : "bg-gray-900 text-gray-500 cursor-not-allowed"}`}>Costumes</span>
      </div>
      {activeTab == "Bio" ? (
        <>
          <h2 className="px-8 text-xl 3xl:text-2xl font-medium uppercase tracking-widest mb-3 relative z-20">{hero.title && hero.heroInformation?.bioFields?.name ? hero.title.replace(hero.heroInformation.bioFields.name, '').trim() : ''}</h2>
          <h1 className="px-8 text-6xl 3xl:text-8xl font-extrabold font-oswald -ml-1 tracking-wide mb-6 relative z-20">{hero.heroInformation?.bioFields?.name}</h1>
        </>
      ) : (
        <h2 className="text-xl px-8 h-[calc(2rem)] 3xl:text-2xl font-medium uppercase tracking-widest mb-8 relative z-20">{hero.title?.replace(hero.heroInformation?.bioFields?.name || '', '').trim()} {hero.heroInformation?.bioFields?.name} / {activeTab}</h2>
      )}
      <div className={`w-full h-auto lg:h-[calc(100vh-12rem)] ${activeTab == "Bio" ? 'lg:overflow-visible' : 'overflow-y-auto'} scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-1100 scrollbar-w-0`}>
        <div className="w-full h-auto">
          {renderTabContent()}
        </div>
      </div>
    </main>
  );
}
