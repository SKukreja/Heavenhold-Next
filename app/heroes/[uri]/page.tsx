"use client";

import { Suspense, useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import Bio from "./Bio";
import Abilities from "./Abilities";
import { Hero } from "#/graphql/generated/types";
import { useHeroes } from '#/app/components/GetHeroesProvider';
import Build from "./Build";
import Costumes from "./Costumes";

interface HeroDetailsProps {
  params: {
    uri: string;
  };
}

export default function HeroDetails({ params }: HeroDetailsProps) {
  const { data } = useHeroes();
  
  const heroes = useMemo(() => {
    return [...(data?.heroes?.nodes ?? [])] as Hero[];
  }, [data]);

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
      case "Build":
        return <Build hero={hero} userId={1} />; // Hard coded ID for now
      case "Review":
        return <div>Review</div>;
      case "Teams":
        return <div>Teams</div>;
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
    <main className="h-screen overflow-hidden bg-cover bg-no-repeat bg-center after:bg-black after:opacity-90 after:absolute after:inset-0" style={{ backgroundImage: `url(${hero.heroInformation?.background?.node?.sourceUrl ?? ""})` }}>
      <div className="p-8 hero-buttons w-full h-24 3xl:h-48 text-xl relative overflow-hidden flex gap-8 mb-8 z-20">
        <span onClick={() => setActiveTab("Bio")} className={`p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Bio" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400"}`}>Bio</span>
        <span onClick={() => setActiveTab("Abilities")} className={`p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Abilities" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400"}`}>Abilities</span>
        <span onClick={() => setActiveTab("Build")} className={`p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Build" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400"}`}>Build</span>
        <span onClick={() => setActiveTab("Teams")} className={`p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Teams" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400"}`}>Teams</span>
        <span onClick={() => setActiveTab("Review")} className={`p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Review" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400"}`}>Review</span>
        <span onClick={() => hero.heroInformation?.costumes && setActiveTab("Costumes")} className={`p-8 text-center font-bold w-full h-full flex items-center justify-center card ${activeTab === "Costumes" ? "bg-gray-700 text-white" : hero.heroInformation?.costumes ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer" : "bg-gray-900 text-gray-500 cursor-not-allowed"}`}>Costumes</span>
      </div>
      {renderTabContent()}
    </main>
  );
}
