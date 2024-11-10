import { Suspense, useMemo } from "react";
import Link from "next/link";
import FadeInImage from "./FadeInImage";
import Loading from "./loading";
import { useItems } from './GetItemsProvider';
import { useHeroes } from './GetHeroesProvider';

interface SearchResultsProps {
  searchQuery: string;
  closeSidebar: () => void;
}

export default function SearchResults({ searchQuery, closeSidebar }: SearchResultsProps) {
  const { data: itemsData } = useItems();
  const { data: heroesData } = useHeroes();

  const combinedData = useMemo(() => {
    const items = itemsData?.items?.nodes ?? [];
    const heroes = heroesData?.heroes?.nodes ?? [];

    const itemResults = items.map((item) => ({
      type: "item",
      title: item.title ?? "",
      uri: item.uri ?? "",
      imageSrc: item.featuredImage?.node.sourceUrl ?? "",
      rarity: item.itemInformation?.rarity?.toString() ?? "",
    }));

    const heroResults = heroes.map((hero) => ({
      type: "hero",
      title: hero.title ?? "",
      uri: hero.uri ?? "",
      imageSrc: hero.heroInformation?.thumbnail?.node.sourceUrl ?? "",
      rarity: hero.heroInformation?.bioFields?.rarity?.toString() ?? "",
    }));

    return [...itemResults, ...heroResults];
  }, [itemsData, heroesData]);

  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return [];

    return combinedData
      .map((item) => {
        const title = item.title.toLowerCase();
        let score = 0;

        if (title === query) {
          score = 100;
        } else if (title.startsWith(query)) {
          score = 75;
        } else if (title.includes(query)) {
          score = 50;
        } else {
          score = 0;
        }

        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [combinedData, searchQuery]);

  if (!searchResults.length) {
    return (
      <div className="pt-8 pb-4 pl-8 pr-8 text-gray-400">
        No results found.
      </div>
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full pt-4 pb-4 overflow-y-auto scrollbar-none relative z-60 h-full">
        {searchResults.map((result) => (
          <div
            key={result.uri}
            className="pt-4 pb-4 pl-8 pr-8 card text-gray-400 hover:bg-gray-900"
          >
            <Link href={result.uri} className="w-full" onClick={closeSidebar}>
              <h3 className="flex items-center">
                <FadeInImage
                  src={
                    result.imageSrc ||
                    "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
                  }
                  className={`w-16 h-16 aspect-square object-cover bg-gradient-to-b border-b-4 ${
                    result.rarity === "Epic" || result.rarity === "3 Star"
                      ? "from-yellow-700 to-yellow-500 border-yellow-500"
                      : result.rarity === "Legend" || result.rarity === "2 Star"
                      ? "from-gray-600 to-gray-400 border-gray-400"
                      : "from-amber-800 to-amber-600 border-amber-600"
                  }`}
                  width={100}
                  height={100}
                  alt={result.title}
                />
                <span className="flex items-center pl-4 text-xs xl:text-sm font-medium w-[calc(100%-4rem)]">
                  {result.title}
                </span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </Suspense>
  );
}
