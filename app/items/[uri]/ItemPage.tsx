'use client';

import FadeInImage from "#/app/components/FadeInImage";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import { useItems } from "#/app/components/GetItemsProvider";
import { useTeams } from "#/app/components/GetTeamsProvider";
import ItemAccessoryCard from "#/app/components/ItemAccessoryCard";
import ItemCard from "#/app/components/ItemCard";
import ItemCardCard from "#/app/components/ItemCardCard";
import ItemCostumeCard from "#/app/components/ItemCostumeCard";
import ItemDefCard from "#/app/components/ItemDefCard";
import LoopVideo from "#/app/components/LoopVideo";
import TeamsList from "#/app/components/RenderTeamsList";
import Loading from "#/app/components/loading";
import { Hero, Item, Team } from "#/graphql/generated/types";
import Link from "next/link";
import { useState } from "react";

interface HeroPageProps {
  activeTab: string;
  uri: string;
}

function capitalize(s: string): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function HeroPage({
  activeTab,
  uri,
}: HeroPageProps) {  
  // Fetch data on the server
  const { data: heroesData } = useHeroes();
  const { data: itemsData } = useItems();
  const { data: teamsData } = useTeams();
  const [loading, setLoading] = useState(false);

  const heroes = heroesData?.heroes?.nodes ?? [] as Hero[];
  const items = itemsData?.items?.nodes ?? [] as Item[];
  const teams = teamsData?.teams?.nodes ?? [] as Team[];

  const item = items.find((item) => item.slug === uri);
  const [currentItem, setCurrentItem] = useState<Item | null>(item as Item);

  const element = currentItem?.equipmentOptions?.mainStats?.find((x) => x?.stat?.includes("Fire") || x?.stat?.includes("Earth") || x?.stat?.includes("Water") || x?.stat?.includes("Light") || x?.stat?.includes("Dark") || x?.stat?.includes("Basic"))?.stat?.toString().replace(" Atk", "");
  const itemType = currentItem?.itemInformation?.itemType?.nodes[0].name?.toLowerCase();
  
  if (loading || !item) {
    return <Loading />;
  }

  if (!currentItem) {
    return <div>Error: Item not found</div>;
  }

    // Define the cost fields explicitly
    type CostFieldKeys = 'mileageShopCost' | 'battleMedalShopCost' | 'equipmentShopCost' | 'mirrorShardCost' | 'bottleCapCost';

    // Map obtain methods to cost fields and currency names
    const obtainCurrencies: Record<string, { costField: CostFieldKeys, currencyName: string }> = {
    'Mileage Shop': { costField: 'mileageShopCost', currencyName: 'Mileage' },
    'Battle Medal Shop': { costField: 'battleMedalShopCost', currencyName: 'Battle Medal' },
    'Equipment Shop': { costField: 'equipmentShopCost', currencyName: 'Gold' },
    'Mirror Shard Shop': { costField: 'mirrorShardCost', currencyName: 'Mirror Shard' },
    'Bottle Cap Shop': { costField: 'bottleCapCost', currencyName: 'Bottle Cap' },
    };

    // Helper function to get the cost
    function getCost(costField: CostFieldKeys): number | null {
    switch (costField) {
        case 'mileageShopCost':
        return item?.itemInformation?.mileageShopCost ?? 0;
        case 'battleMedalShopCost':
        return item?.itemInformation?.battleMedalShopCost ?? 0;
        case 'equipmentShopCost':
        return item?.itemInformation?.equipmentShopCost ?? 0;
        case 'mirrorShardCost':
        return item?.itemInformation?.mirrorShardCost ?? 0;
        case 'bottleCapCost':
        return item?.itemInformation?.bottleCapCost ?? 0;
        default:
        return null;
    }
    }

  return (    
    <div className="w-full h-auto pt-24 lg:pt-8 pb-8 px-8 relative flex flex-col gap-8 z-20"> 
        <h1 className="text-6xl 3xl:text-8xl font-extrabold font-oswald -ml-1 tracking-wide mb-6 relative z-20">
            {currentItem?.title}
        </h1>
        <div className="flex flex-col lg:flex-row w-full items-start gap-8">
            <div className={`w-full lg:w-1/3 flex flex-col gap-8`}>
            <div className={`w-full ${itemType == 'costume' ? 'bg-[#0f0c0c] p-8' : 'bg-gray-800 p-4'}`}>
                {itemType == 'costume' ? <ItemCostumeCard item={currentItem} element={element} selectedItem={9999} index={0} /> 
                : itemType == 'card' ? <ItemCardCard item={currentItem} element={element} selectedItem={9999} index={0} />
                : itemType == 'shield' || itemType == 'accessory' ? <ItemDefCard item={currentItem} selectedItem={9999} element={element} index={0} />
                : itemType == 'merch' || itemType == 'relic' ? <ItemAccessoryCard item={currentItem} selectedItem={9999} element={element} index={0} />
                : <ItemCard item={currentItem} element={element} selectedItem={9999} index={0} />
                }  
            </div>
            {currentItem?.weapons?.exclusive && 
                <div className="w-full flex flex-col gap-4">
                    <h2 className="mb-2 text-2xl font-medium font-oswald">Related Hero</h2>
                    {item?.weapons?.hero && (() => {
                        const hero = heroes.find(hero => hero.id === item?.weapons?.hero?.nodes[0]?.id);
                        if (!hero) return null;
                        return (
                        <Link href={"/heroes/"+hero?.slug} className="flex bg-gray-transparent p-4 justify-start items-center gap-8">
                            <FadeInImage
                                src={
                                    hero?.heroInformation?.thumbnail?.node.sourceUrl
                                    ? hero?.heroInformation?.thumbnail?.node.sourceUrl + ""
                                    : "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
                                }
                                className={`w-16 h-16 aspect-square object-cover bg-gradient-to-b border-b-4 ${
                                    (hero?.heroInformation?.bioFields?.rarity?.toString() == '3 Star') ? `from-yellow-700 to-yellow-500 border-b-4 border-yellow-500` : (hero?.heroInformation?.bioFields?.rarity?.toString() == '2 Star' ? `from-gray-600 to-gray-400 border-b-4 border-gray-400` : `from-amber-800 to-amber-600 border-b-4 border-amber-600`)
                                }`} 
                                width={100}
                                height={100}
                                alt={hero?.title + ""}
                            />
                            <h3 className="font-semibold">{hero?.title}</h3>
                        </Link>
                        );
                    })()}
                </div>   
            }
            <div className="hidden w-full lg:flex flex-col gap-4">
                <h2 className="mb-2 text-2xl font-medium font-oswald">Obtainable From</h2>
                {item?.itemInformation?.howToObtain?.map((method, index) => {
                    const relatedCurrency = obtainCurrencies[method as keyof typeof obtainCurrencies];
                    let costDisplay = null;
                    if (relatedCurrency && relatedCurrency.costField) {
                        const cost = getCost(relatedCurrency.costField);
                        if (cost != null) {
                            costDisplay = `${cost} ${relatedCurrency.currencyName}`;
                        }
                    }
                    return (
                    <div key={index} className="flex bg-gray-transparent p-4 justify-between items-center">
                        <h3 className="font-semibold">{method}</h3>
                        {costDisplay && <p>{costDisplay}</p>}
                    </div>
                    );
                })}
            </div>
            </div>
            {item?.weapons?.weaponSkill && (() => {
                return (
                    <div className="flex flex-col gap-8 w-full lg:w-2/3">
                        <div className="w-full py-8 pl-4 pr-8 bg-gray-transparent flex items-center">
                            <div className="w-1/5 h-32 flex justify-center items-center pr-4">
                                <FadeInImage src={'/icons/' + item?.weapons?.weaponSkillChain?.toString().toLowerCase() + '.webp'} alt={'Chain Trigger'} width={40} height={40} />
                            </div>
                            <div className="w-4/5">
                                <h2 className="uppercase tracking-widest text-green-500 text-xs">Weapon Skill</h2>
                                <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">{item?.weapons?.weaponSkillName}</h2>
                                <div className="mb-6 w-4/5 h-auto">
                                <span className="w-full" dangerouslySetInnerHTML={{ __html: item?.weapons?.weaponSkillDescription ?? "" }}></span>
                                </div>
                                <div className="w-full h-auto">
                                <span className="w-full" dangerouslySetInnerHTML={{ __html: "Regen Time: " + item?.weapons?.weaponSkillRegenTime + "s" ?? "" }}></span>  
                                </div>
                            </div>
                        </div>
                        {item?.weapons?.weaponSkillVideo?.node?.mediaItemUrl && (
                            <div className="w-full">
                                <LoopVideo videoSrc={item?.weapons?.weaponSkillVideo?.node?.mediaItemUrl + ""} />
                            </div>
                        )}   
                    </div>
                );
            })()}
        </div>
        {/* Mobile Section */}
        <div className="flex lg:hidden flex-col lg:flex-row w-full items-start gap-8">
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <h2 className="mb-2 text-2xl font-medium font-oswald">Obtainable From</h2>
                {item?.itemInformation?.howToObtain?.map((method, index) => {
                    const relatedCurrency = obtainCurrencies[method as keyof typeof obtainCurrencies];
                    let costDisplay = null;
                    if (relatedCurrency && relatedCurrency.costField) {
                        const cost = getCost(relatedCurrency.costField);
                        if (cost != null) {
                            costDisplay = `${cost} ${relatedCurrency.currencyName}`;
                        }
                    }
                    return (
                    <div key={index} className="flex bg-gray-transparent p-4 justify-between">
                        <h3 className="font-semibold">{method}</h3>
                        {costDisplay && <p>Cost: {costDisplay}</p>}
                    </div>
                    );
                })}
            </div>
        </div>

            <div className="flex flex-col w-full items-start">
                <h2 className="mb-6 text-2xl font-medium font-oswald">Teams</h2>
                <TeamsList item={item as Item} />
            </div>

    </div>
  )
  ;
}