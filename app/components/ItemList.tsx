"use client";

import Link from "next/link";
import { useEffect, useRef, useState, Suspense, useMemo } from "react";
import { usePathname } from 'next/navigation';
import Loading from "./loading";
import FadeInImage from "./FadeInImage";
import { Item } from "#/graphql/generated/types";
import { useItems } from './GetItemsProvider';
import { transformStatKey } from "#/ui/helpers";

export default function ItemList() {
  const { data } = useItems();
  const items = useMemo(() => [...(data?.items?.nodes.filter(item => item.itemInformation?.itemType?.nodes[0].name != 'Cards') ?? [])] as Item[], [data]);
  const itemsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();  
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    if (!items.length || !itemsRef.current) return;
    const element = itemsRef.current[pathname + "/"];
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
      setActiveItem(pathname + "/");
    }
  }, [pathname, items]);

  if (!items.length) {
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div ref={containerRef} className="pt-4 pb-4 overflow-y-auto scrollbar-none w-full h-full">
        {items.map((item: Item) => {
          const element = item?.equipmentOptions?.mainStats?.find((x) =>
            x?.stat?.[0]?.toString().match(/Fire|Earth|Water|Light|Dark|Basic/)
          )?.stat?.toString().replace(" Atk", "").toLowerCase() || '';
        
          const itemType = item?.itemInformation?.itemType?.nodes[0].name?.toLowerCase() || '';
          const rarity = item?.itemInformation?.rarity?.toString().replace(/ /g, "-").toLowerCase() || '';
          const weaponType = item?.weapons?.weaponType?.replace(/ /g, "-").toLowerCase() || '';
        
          // Collect all main stats and create individual data attributes
          const mainStats = item?.equipmentOptions?.mainStats || [];
        
          // Prepare an object to hold dynamic data attributes
          const dataAttributes: { [key: string]: string | number | boolean } = {};
        
          const transformedStats: string[] = [];
        
          mainStats.forEach((stat) => {
            const transformedStat = transformStatKey(stat?.stat?.toString() || '');
          
            if (transformedStat) {
              // Add to data attributes
              dataAttributes[`data-stat-${transformedStat}`] = stat?.value || true;
          
              // Collect transformed stats
              transformedStats.push(`${transformedStat}`);
            }
          });
          return (
          <div
            key={item.uri}
            ref={(el) => { itemsRef.current[item.uri ?? ""] = el; }}
            data-sort 
            data-name={item.title} 
            data-title={item.title} 
            data-element={element} 
            data-rarity={rarity.toLowerCase() == 'epic' ? 6 : rarity.toLowerCase() == 'legend' ? 5 : rarity.toLowerCase() == 'rare' ? 4 : rarity.toLowerCase() == 'uncommon' ? 3 : rarity.toLowerCase() == 'common' ? 2 : 1} 
            data-type={itemType} 
            data-weapon-type={weaponType}
            data-dps={item.weapons?.maxDps}
            data-filter={`${item.title} ${rarity ? "r-" + rarity : ""} ${itemType ? "t-" + itemType : ""} ${element ? "e-" + element : ""} ${itemType === 'weapon' ? 'w-' + weaponType : ''} ${transformedStats.join(' ')}`}
            className={`pt-4 pb-4 pl-8 pr-8 card ${
              activeItem === item.uri ? 'bg-gray-800 text-gray-300' : 'text-gray-400 hover:bg-gray-900'
            }`}
          >
            <Link href={`${item.uri}`} className={"w-full"}>
              <h3 className="flex items-center">
                <FadeInImage
                  src={
                    item.featuredImage?.node.sourceUrl
                      ? item.featuredImage?.node.sourceUrl + ""
                      : "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
                  }
                  className={`w-16 h-16 aspect-square object-cover`} 
                  width={100}
                  height={100}
                  alt={item.title + ""}
                />
                <span className="flex items-center pl-4 text-xs xl:text-sm font-medium w-[calc(100%-4rem)]">{item.title}</span>
              </h3>
            </Link>
          </div>
          )})}
      </div>
    </Suspense>
  );
}
