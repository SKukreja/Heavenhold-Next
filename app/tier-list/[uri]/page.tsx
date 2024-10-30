"use client";

import { useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import { Hero } from "#/graphql/generated/types";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import MetaList from "./MetaList";

interface MetaProps {
  params: {
    uri: string;
    tab?: string[];
  };
}

function capitalize(s: string): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function Page({ params }: MetaProps) {
  const { data: heroesData } = useHeroes();
  const heroes = useMemo(() => {
    return [...(heroesData?.heroes?.nodes ?? [])] as Hero[];
  }, [heroesData]);
  const categories = useMemo(() => {
    return [
        {
            id: 0,
            name: "General",
        },{
            id: 1,
            name: "Colosseum",
        }, {
            id: 2,
            name: "Raid",
        }, {
            id: 3,
            name: "Arena",
        }
    ];
  }, []);

  const [currentCategory, setCurrentCategory] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.uri) {
      return;
    }
    const urlCategory = categories.find((category) => category.name.toLowerCase() === params.uri.toLowerCase());
    setCurrentCategory(urlCategory?.id ?? 0);
    setLoading(false);
  }, [params.uri]);

  const tabParam = params.tab ? params.tab[0] : undefined;
  const [activeTab, setActiveTab] = useState(capitalize(tabParam || "General"));

  useEffect(() => {
    setActiveTab(capitalize(tabParam || "General"));
  }, [tabParam]);

  if (!heroes || loading) {
    return <Loading />;
  }

//   if (!hero) {
//     return <div>Error: Hero not found</div>;
//   }

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "Bio":
//         return <Bio hero={hero} />;
//       case "Abilities":
//         return <Abilities hero={hero} items={items} />;
//       case "Teams":
//         return <Teams hero={hero} teams={teams} heroes={heroes} items={items} />;
//       case "Costumes":
//         return <Costumes hero={hero} />;
//       case "Review":
//         return <div></div>;
//       case "Gallery":
//         return <div></div>;
//       default:
//         return <Bio hero={hero} />;
//     }
//   };
  return (
    <div className="w-full h-auto"><MetaList categoryId={currentCategory} heroes={heroes} /></div>
  )
}
