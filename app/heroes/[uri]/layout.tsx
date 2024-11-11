"use client";

import { PropsWithChildren, useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import { Hero } from "#/graphql/generated/types";
import Link from "next/link";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import { useSelectedLayoutSegment } from "next/navigation"; // Import the hook
import { bio, abilities, teamsIcon, review, costumes, gallery, teams } from "#/ui/icons";
import HeroContext from "./HeroContext"; // Import HeroContext
import FadeInImage from "#/app/components/FadeInImage";

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
      <main className="pt-24 lg:pt-0 h-auto lg:h-screen overflow-y-auto lg:overflow-hidden">
        {/* Tab Navigation */}
        <div className="p-0 lg:p-8 fixed bottom-0 left-0 right-0 lg:relative flex hero-buttons w-full h-24 text-xs lg:text-xl overflow-hidden gap-0 lg:gap-8 mb-0 lg:mb-8 z-30">
          {["Bio", "Abilities", "Teams", "Review", "Costumes", "Gallery"].map((tab: string) => (
                <Link
                key={tab}
                href={`/heroes/${params.uri}${tab !== "Bio" ? `/${tab.toLowerCase()}` : ""}`}
                className={`p-4 lg:p-8 text-center cursor-pointer hover:bg-gray-800 hover:text-white font-bold w-1/6 lg:w-full h-full gap-2 flex flex-col lg:flex-row items-center justify-center card ${
                activeTab === tab ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-400"
                }`}
                >
                    <span className={`icon w-4 h-4 ${activeTab === tab ? "fill-white active" : "fill-gray-400"}`}>
                        {tab === "Bio" && bio()}
                        {tab === "Abilities" && abilities()}
                        {tab === "Teams" && <FadeInImage src={teamsIcon} width={24} height={24} className="teams-icon" alt="Teams" />}
                        {tab === "Review" && review()}
                        {tab === "Costumes" && costumes()}
                        {tab === "Gallery" && gallery()}
                    </span>
                    <span className="buttonText">{tab}</span>
                </Link>
          ))}
        </div>
        {/* Hero Title */}
        {activeTab === "Bio" ? (
          <>
            <h2 className="px-8 text-sm 3xl:text-2xl font-medium uppercase tracking-widest mb-3 relative z-20">
              {hero.title && hero.heroInformation?.bioFields?.name
                ? hero.title.replace(hero.heroInformation.bioFields.name, "").trim()
                : ""}
            </h2>
            <h1 className="px-8 text-6xl 3xl:text-8xl font-extrabold font-oswald -ml-1 tracking-wide mb-6 relative z-20">
              {hero.heroInformation?.bioFields?.name}
            </h1>
          </>
        ) : (
          <>
            <h2 className="px-8 text-sm 3xl:text-2xl font-medium uppercase tracking-widest mb-3 relative z-20">
              {hero.title?.replace(hero.heroInformation?.bioFields?.name || "", "").trim()}{" "}
              {hero.heroInformation?.bioFields?.name}
            </h2>
            <h1 className="px-8 text-6xl 3xl:text-8xl font-extrabold font-oswald -ml-1 tracking-wide mb-6 relative z-20">
              {activeTab}
            </h1>
          </>
        )}
        {/* Content */}
        <div
          className={`w-full h-auto lg:h-[calc(100vh-12rem)] ${
            activeTab === "Bio" ? "lg:overflow-visible" : "overflow-y-auto"
          } scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-1100 scrollbar-w-0`}
        >
          <div className="w-full h-auto pb-32 lg:pb-0">{children}</div>
        </div>
      </main>
    </HeroContext.Provider>
  );
}
