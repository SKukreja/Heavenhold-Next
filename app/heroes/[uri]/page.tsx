"use client";

import { Suspense, useState, useEffect } from "react";
import Loading from "#/app/components/loading";
import Bio from "./Bio";
import Abilities from "./Abilities";
import { GetHero as query } from "./HeroQueries";
import { Hero, GetHeroResponse } from "#/types"; // Import types
import Build from "./Build";
import Costumes from "./Costumes";

async function fetchHero(uri: string): Promise<Hero> {

  const variables = { uri };

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody: GetHeroResponse = await res.json();
  
  if (responseBody && responseBody.data && responseBody.data.hero) {
    return responseBody.data.hero;
  } else {
    throw new Error("Failed to fetch the post");
  }
}

interface HeroDetailsProps {
  params: {
    uri: string;
  };
}

export default function HeroDetails({ params }: HeroDetailsProps) {
  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Bio");

  useEffect(() => {
    async function loadHero() {
      const fetchedHero = await fetchHero(params.uri);
      setHero(fetchedHero);
      setLoading(false);
    }
    loadHero();
  }, [params.uri]);

  const renderTabContent = () => {
    if (!hero) return null;
    switch (activeTab) {
      case "Bio":
        return <Bio hero={hero} />;
      case "Abilities":
        return <Abilities hero={hero} />;
      case "Build":
          return <Build hero={hero} userId={1} />; // Hard coded ID for now
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
    <main className="h-screen overflow-hidden bg-cover bg-no-repeat bg-center after:bg-black after:opacity-90 after:absolute after:inset-0" style={{ backgroundImage: `url(${hero.heroInformation.background?.node?.sourceUrl ?? ""})` }}>
      <div className="p-8 hero-buttons w-full h-24 3xl:h-48 text-xl relative overflow-hidden flex gap-8 mb-8 z-20">
        <span onClick={() => setActiveTab("Bio")} className={`p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Bio" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400"}`}>Bio</span>
        <span onClick={() => setActiveTab("Abilities")} className={`p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Abilities" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400"}`}>Abilities</span>
        <span onClick={() => setActiveTab("Build")} className={`p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Build" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400"}`}>Build</span>
        <span onClick={() => {if (hero.heroInformation.costumes) setActiveTab("Costumes")}} className={`p-8 text-center font-bold w-full h-full flex items-center justify-center card ${activeTab === "Costumes" ? "bg-gray-700 text-white" : hero.heroInformation.costumes ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer" : "bg-gray-900 text-gray-500 cursor-not-allowed"}`}>Costumes</span>
      </div>
      {renderTabContent()}
    </main>
  );
}