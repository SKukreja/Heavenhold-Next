"use client";

import Link from "next/link";
import { Suspense, useMemo, useEffect } from "react";
import Loading from "./loading";
import ItemCard from "./ItemCard";
import ItemCardCard from "./ItemCardCard";
import ItemCostumeCard from "./ItemCostumeCard";
import { Item } from "#/graphql/generated/types";
import { useItems } from './GetItemsProvider';
import ItemAccessoryCard from "./ItemAccessoryCard";
import ItemDefCard from "./ItemDefCard";
import { transformStatKey } from "#/ui/helpers";

export default function ItemGrid() {
  const { data } = useItems();

  const items = useMemo(() => {
    const sortedItems = [...(data?.items?.nodes ?? [])] as Item[];
    sortedItems.filter(item => item.itemInformation?.itemType?.nodes[0].name != 'Cards').sort((a: Item, b: Item) => {
      const aName = a.title || '';
      const bName = b.title || '';
      return aName.localeCompare(bName);
    });
    return sortedItems;
  }, [data]);

  if (!items.length) {
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div id="ItemList" className="flex flex-wrap justify-start ml-[calc(2rem+2px)] w-[calc(100%-4rem-2px)] lg:w-[calc(100%-2rem-2px)] gap-4 lg:gap-8 transform-gpu">
        {items
          .filter((item: Item) => item?.itemInformation?.itemType?.nodes[0].name != "Cards")
          .map((item: Item, index: number) => (
            <ItemLink key={item.uri} item={item} index={index} />
          ))}
      </div>
    </Suspense>
  );
}

const ItemLink = ({ item, index }: { item: Item, index: number }) => {
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
  console.log(item)

  return (
    <Link
      href={item.uri ?? '/'} 
      data-sort 
      data-name={item.title} 
      data-title={item.title} 
      data-element={element} 
      data-rarity={rarity.toLowerCase() == 'epic' ? 6 : rarity.toLowerCase() == 'legend' ? 5 : rarity.toLowerCase() == 'unique' ? 4 : rarity.toLowerCase() == 'rare' ? 3 : rarity.toLowerCase() == 'normal' ? 2 : 1} 
      data-type={itemType ? (itemType == 'costume' && item.costume?.super == true ? 'illustration-costume' : itemType) : ""} 
      data-weapon-type={weaponType}
      data-dps={item.weapons?.maxDps}
      data-filter={`${item.title} ${rarity ? "r-" + rarity : ""} ${itemType ? "t-" + (itemType == 'costume' && item.costume?.super == true ? 'illustration-costume' : itemType) : ""} ${element ? "e-" + element : ""} ${itemType === 'weapon' ? 'w-' + weaponType : ''} ${transformedStats.join(' ')}`}
      className={`${"e-" + element}${item?.itemInformation?.itemType?.nodes[0].name == 'Weapon' 
      ? ' w-' + item?.weapons?.weaponType?.replace(/ /g, "-").toLowerCase() : ''} 
      ${"t-" + itemType ? "t-" + (itemType == 'costume' && item.costume?.super == true ? 'illustration-costume' : itemType) : ""} 
      r-${item?.itemInformation?.rarity?.toString().replace(/ /g, "-").toLowerCase()} 
      relative w-[calc(100%)] lg:w-[calc((100%/2)-2rem-4px)] xl:w-[calc((100%/3)-2rem-4px)] 3xl:w-[calc((100%/4)-2rem-4px)] 4xl:w-[calc((100%/5)-2rem-4px)] flex cursor-pointer ${itemType == 'costume' ? 'bg-[#22262f]' : 'bg-gray-800/75'}
      align-middle transition-all duration-200 after:transition-all 
      after:linear after:duration-200 ease grayscale-[30%] 
      hover:after:outline-offset-[-5px] hover:grayscale-0 
      after:w-full after:h-full after:absolute after:inset-0 after:z-20 after:pointer-events-none after:border after:border-gray-800 after:outline after:outline-2 
      p-8`}
      {...dataAttributes}
    >
      {itemType == 'costume' ? <ItemCostumeCard item={item} element={element} index={index} /> 
      : itemType == 'equipment-costume' ? <ItemCostumeCard item={item} element={element} index={index} /> 
      : itemType == 'illustration-costume' ? <ItemCostumeCard item={item} element={element} index={index} /> 
      : itemType == 'card' ? <ItemCardCard item={item} element={element} index={index} />
      : itemType == 'shield' || itemType == 'accessory' ? <ItemDefCard item={item} element={element} index={index} />
      : itemType == 'merch' || itemType == 'relic' ? <ItemAccessoryCard item={item} element={element} index={index} />
      : <ItemCard item={item} element={element} index={index} />
      }     
    </Link>
  );
}
