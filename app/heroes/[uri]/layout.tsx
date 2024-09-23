"use client";

import { PropsWithChildren, useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import { Hero } from "#/graphql/generated/types";
import Link from "next/link";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import { useSelectedLayoutSegment } from "next/navigation"; // Import the hook
import HeroContext from "./HeroContext"; // Import HeroContext

interface LayoutProps {
  params: {
    uri: string;
  };
}

export default function Layout({ children, params }: PropsWithChildren<LayoutProps>) {
  // Call hooks at the top level before any conditional logic
  const segment = useSelectedLayoutSegment(); // Move this to the top
  const { data: heroesData } = useHeroes();

  const heroes = useMemo(() => {
    return [...(heroesData?.heroes?.nodes ?? [])] as Hero[];
  }, [heroesData]);

  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedHero = heroes.find((hero) => hero.slug === params.uri);
    setHero(fetchedHero ?? null);
    setLoading(false);
  }, [params.uri, heroes]);

  // Early returns after hooks are called
  if (loading) {
    return <Loading />;
  }

  if (!hero) {
    return <div>Error: Hero not found</div>;
  }

  const activeTab = segment
    ? segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase()
    : "Bio";

  return (
    <HeroContext.Provider value={hero}>
      <main className="pt-32 lg:pt-0 h-auto lg:h-screen overflow-y-auto lg:overflow-hidden">
        {/* Tab Navigation */}
        <div className="p-8 hidden lg:flex hero-buttons w-full h-24 3xl:h-48 text-xl relative overflow-hidden gap-8 mb-8 z-20">
          {["Bio", "Abilities", "Teams", "Review", "Costumes"].map((tab: string) => (
            <Link
              key={tab}
              href={`/heroes/${params.uri}${tab !== "Bio" ? `/${tab.toLowerCase()}` : ""}`}
              className={`p-8 text-center cursor-pointer hover:bg-gray-800 hover:text-white font-bold w-full h-full flex items-center justify-center card ${
                activeTab === tab ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-400"
              }`}
            >
              {tab}
            </Link>
          ))}
        </div>
        {/* Hero Title */}
        {activeTab === "Bio" ? (
          <>
            <h2 className="px-8 text-xl 3xl:text-2xl font-medium uppercase tracking-widest mb-3 relative z-20">
              {hero.title && hero.heroInformation?.bioFields?.name
                ? hero.title.replace(hero.heroInformation.bioFields.name, "").trim()
                : ""}
            </h2>
            <h1 className="px-8 text-6xl 3xl:text-8xl font-extrabold font-oswald -ml-1 tracking-wide mb-6 relative z-20">
              {hero.heroInformation?.bioFields?.name}
            </h1>
          </>
        ) : (
          <h2 className="text-xl px-8 h-[calc(2rem)] 3xl:text-2xl font-medium uppercase tracking-widest mb-8 relative z-20">
            {hero.title?.replace(hero.heroInformation?.bioFields?.name || "", "").trim()}{" "}
            {hero.heroInformation?.bioFields?.name} / {activeTab}
          </h2>
        )}
        {/* Content */}
        <div
          className={`w-full h-auto lg:h-[calc(100vh-12rem)] ${
            activeTab === "Bio" ? "lg:overflow-visible" : "overflow-y-auto"
          } scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-1100 scrollbar-w-0`}
        >
          <div className="w-full h-auto">{children}</div>
        </div>
      </main>
    </HeroContext.Provider>
  );
}
