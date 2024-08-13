"use client";

import Link from "next/link";
import { useEffect, useRef, useState, Suspense, useMemo } from "react";
import { usePathname } from 'next/navigation';
import Loading from "./loading";
import FadeInImage from "./FadeInImage";
import { Hero } from "#/graphql/generated/types";
import { useHeroes } from './GetHeroesProvider';

export default function HeroList() {
  const { data } = useHeroes();
  const heroes = useMemo(() => [...(data?.heroes?.nodes ?? [])] as Hero[], [data]);
  const heroesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();  
  const [activeHero, setActiveHero] = useState<string | null>(null);

  useEffect(() => {
    if (!heroes.length || !heroesRef.current) return;
    const element = heroesRef.current[pathname + "/"];
    if (element && containerRef.current) {
      const offset = 100; // Adjust this value to control the scroll offset
      const elementRect = element.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollTop = containerRef.current.scrollTop;
      const offsetPosition = elementRect.top - containerRect.top + scrollTop - offset;

      containerRef.current.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveHero(pathname + "/");
    }
  }, [pathname, heroes]);

  if (!heroes.length) {
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div ref={containerRef} className="pt-4 pb-4 overflow-y-auto scrollbar-none h-full">
        {heroes.map((hero: Hero) => (
          <div
            key={hero.uri}
            ref={(el) => { heroesRef.current[hero.uri ?? ""] = el; }}
            className={`pt-4 pb-4 pl-8 pr-8 card ${
              activeHero === hero.uri ? 'bg-gray-700 text-gray-300' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <Link href={`${hero.uri}`} className={"w-full"}>
              <h3 className="flex items-center">
                <FadeInImage
                  src={
                    hero.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl
                      ? hero.featuredImage.node.mediaDetails.sizes[0].sourceUrl
                      : "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
                  }
                  className="w-12 h-12 aspect-square object-cover"
                  width={50}
                  height={50}
                  alt={hero.title + ""}
                />
                <span className="flex items-center pl-4 text-xs xl:text-sm font-medium w-[calc(100%-4rem)]">{hero.title}</span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </Suspense>
  );
}
