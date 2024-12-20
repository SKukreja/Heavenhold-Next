"use client";

import { Hero, Item } from "#/graphql/generated/types";
import { useState } from "react";
import FadeInImage from "#/app/components/FadeInImage";
import StatFormatter from "#/app/components/StatFormatter";
import { normal, special, arrowUpRight, arrowDownLeft } from "#/ui/icons";
import LoopVideo from "#/app/components/LoopVideo";
import ItemCard from "#/app/components/ItemCard";
import { useRouter } from "next/navigation";

interface AbilitiesProps {
  hero: Hero;
  items: Item[];
}

function Abilities({ hero, items }: AbilitiesProps) {
    const [selectedItem, setselectedItem] = useState(0);
    const [ascended, setAscended] = useState(false);  
    const router = useRouter();


    const [selectedExWeapon, setSelectedExWeapon] = useState(items.find(i => i.id === (hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes?.[selectedItem] as Item)?.id) || null);

    const handleWeaponClick = (index: number, item: Item) => {
      if (selectedItem === index) {        
        router.push(`/items/${item.slug}`);

      }
      else {
        setselectedItem(index);
      }
    };

    const handleAscendClick = () => {
      setAscended(!ascended);
    };
   
    return (
      <div id="Abilities" className="relative overflow-visible z-20 pt-8 lg:pt-0 w-full h-auto items-start flex flex-col text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg px-8 3xl:px-8">
        <div className="w-full justify-start h-auto flex flex-col lg:flex-row">
          {hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes && (
            <div className="w-full lg:w-1/4 h-auto flex flex-col pr-0 lg:pr-8">              
              <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">Exclusive Weapons</h2>
              <div className="flex flex-col gap-8 justify-between items-start w-full">
                {hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes.map((weapon, index) =>
                { 
                  const weaponNode = weapon as Item;
                  const item = items.find(x => x.id === weaponNode.id);
                  if (!item) return null;
                  const element = item?.equipmentOptions?.mainStats?.find((x) => x?.stat?.includes("Fire") || x?.stat?.includes("Earth") || x?.stat?.includes("Water") || x?.stat?.includes("Light") || x?.stat?.includes("Dark") || x?.stat?.includes("Basic"))?.stat?.toString().replace(" Atk", "");
                  return (
                    <div key={item.id} className={`w-full relative ${hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes?.length ?? 0 > 1 ? 'cursor-pointer' : ''} ${selectedItem === index ? 'bg-gray-800' : 'bg-gray-900'} p-4 3xl:p-8`} onClick={() => handleWeaponClick(index, item)}>
                      <div className={`absolute top-4 right-4 text-xs text-${hero.heroInformation?.bioFields?.element?.toLowerCase()} ${selectedItem === index && (hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes?.length ?? 0) > 1 ? 'block' : 'hidden'}`}>Selected</div>
                      <ItemCard item={item} element={element} selectedItem={selectedItem} index={index} hero={hero} />
                    </div>                    
                    )
                })}              
              </div>
            </div>
          )}          
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 h-full">
            {hero.heroInformation?.variations?.find(x => x === "Ascent") ? (
            <div className="w-full flex gap-8 cursor-pointer mt-8 lg:mt-0 mb-8 lg:mb-6 text-2xl 3xl:text-4xl font-medium font-oswald uppercase" onClick={() => handleAscendClick()}>
              <h2 className="text-white flex items-center justify-center">                
                <span>{ascended ? "Descent" : "Ascent"}</span>
                <span className="w-5 h-5 ml-2 -mt-2">{ascended ? arrowDownLeft("white") : arrowUpRight("white")}</span>
              </h2>
            </div>) : (<div className="w-full flex gap-4 lg:gap-8 cursor-pointer mb-6 text-2xl 3xl:text-4xl font-medium font-oswald uppercase">
              <h2 className="text-white hidden lg:flex items-center justify-center">&nbsp;</h2>
            </div>)}
            <div className="w-full flex gap-4 lg:gap-8 flex-wrap">
              <div className="w-[calc(100%)] py-8 pl-4 pr-8 bg-gray-transparent mb-2 flex items-center">
                <div className="w-1/5 h-32 flex justify-center items-center pr-4">
                <FadeInImage src={normal} alt={'Normal Attack Icon'} width={40} height={40} />
                </div>
                <div className="w-4/5">
                  <h2 className="uppercase tracking-widest text-green-500 text-xs flex">Normal Attack</h2>
                  <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">
                  {
                    selectedItem === 0 ? (ascended ? hero.heroInformation?.ascentAbilities?.normalAtkName : hero.heroInformation?.abilityFields?.normalAtkName) : 
                    selectedItem === 1 ? (ascended ? hero.heroInformation?.ascentExAbilities?.normalAtkName : hero.heroInformation?.exAbilities?.normalAtkName) : ""
                  }
                  </h2>
                  <div className="w-full h-auto">
                    <span className="w-full" dangerouslySetInnerHTML={{ __html: 
                      selectedItem === 0 ? (ascended ? hero.heroInformation?.ascentAbilities?.normalAtkDescription : hero.heroInformation?.abilityFields?.normalAtkDescription) + "" : 
                      selectedItem === 1 ? (ascended ? hero.heroInformation?.ascentExAbilities?.normalAtkDescription : hero.heroInformation?.exAbilities?.normalAtkDescription) + "" : ""
                    ?? "" }}></span>
                  </div>
                </div>
              </div>              
              <div className="w-[calc(100%)] py-8 pl-4 pr-8 bg-gray-transparent mb-2 flex items-center">
                <div className="w-1/5 h-32 flex justify-center items-center pr-4">
                  <FadeInImage src={special} alt={'Special Ability Icon'} width={40} height={40} />
                </div>
                <div className="w-4/5">
                <h2 className="uppercase tracking-widest text-green-500 text-xs">Special Ability</h2>
                <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">
                  {
                    selectedItem === 0 ? (ascended ? hero.heroInformation?.ascentAbilities?.specialAbilityName : hero.heroInformation?.abilityFields?.specialAbilityName) + "" : 
                    selectedItem === 1 ? (ascended ? hero.heroInformation?.ascentExAbilities?.specialAbilityName : hero.heroInformation?.exAbilities?.specialAbilityName) + "" : ""
                  }
                </h2>
                <div className="w-full h-auto">
                  <span className="w-full" dangerouslySetInnerHTML={{ __html: 
                  selectedItem === 0 ? (ascended ? hero.heroInformation?.ascentAbilities?.specialAbilityDescription : hero.heroInformation?.abilityFields?.specialAbilityDescription) + "" : 
                  selectedItem === 1 ? (ascended ? hero.heroInformation?.ascentExAbilities?.specialAbilityDescription : hero.heroInformation?.exAbilities?.specialAbilityDescription) + "" : ""
                  }}></span>
                </div>
                </div>
              </div>
              <div className="w-[calc(100%)] py-8 pl-4 pr-8 bg-gray-transparent mb-2 flex items-center">
                <div className="w-1/5 h-32 flex justify-center items-center pr-4 relative -gap-2">
                  <FadeInImage className="w-full mt-8" src={'/icons/' + (hero.heroInformation?.abilityFields?.chainStateTrigger?.toString().toLowerCase() || '') + '.webp'} alt={'Chain Trigger ' + (hero.heroInformation?.abilityFields?.chainStateTrigger || '')} width={30} height={30} />
                  <FadeInImage className="w-full -mt-8" src={'/icons/' + (hero.heroInformation?.abilityFields?.chainStateResult?.toString().toLowerCase() || '') + '.webp'} alt={'Chain Result ' + (hero.heroInformation?.abilityFields?.chainStateResult || '')} width={30} height={30} />
                </div>
                <div className="w-4/5">
                  <h2 className="uppercase tracking-widest text-green-500 text-xs">Chain Ability</h2>
                  <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">
                  {
                    selectedItem === 0 ? (ascended ? hero.heroInformation?.ascentAbilities?.chainSkillName : hero.heroInformation?.abilityFields?.chainSkillName) + "" : 
                    selectedItem === 1 ? (ascended ? hero.heroInformation?.ascentExAbilities?.chainSkillName : hero.heroInformation?.exAbilities?.chainSkillName) + "" : ""
                  }
                  </h2>
                  <div className="w-full h-auto">
                    <span className="w-full" dangerouslySetInnerHTML={{ __html: 
                    selectedItem === 0 ? (ascended ? hero.heroInformation?.ascentAbilities?.chainSkillDescription : hero.heroInformation?.abilityFields?.chainSkillDescription) + "" : 
                    selectedItem === 1 ? (ascended ? hero.heroInformation?.ascentExAbilities?.chainSkillDescription : hero.heroInformation?.exAbilities?.chainSkillDescription) + "" : ""
                    }}></span>
                  </div>                  
                </div>
              </div>
              {hero.heroInformation?.bioFields?.exclusiveWeapon && (() => {
                const weapon = hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes[selectedItem] as Item;
                const weaponNode = items.find(x => x.id === weapon.id);
                return (
                  <div className="w-[calc(100%)] py-8 pl-4 pr-8 bg-gray-transparent mb-8 flex items-center">
                    <div className="w-1/5 h-32 flex justify-center items-center pr-4">
                      <FadeInImage src={'/icons/' + weaponNode?.weapons?.weaponSkillChain?.toString().toLowerCase() + '.webp'} alt={'Chain Trigger ' + hero.heroInformation?.abilityFields?.chainStateTrigger} width={40} height={40} />
                    </div>
                    <div className="w-4/5">
                      <h2 className="uppercase tracking-widest text-green-500 text-xs">Weapon Skill</h2>
                      <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">{weaponNode?.weapons?.weaponSkillName}</h2>
                      <div className="mb-6 w-4/5 h-auto">
                        <span className="w-full" dangerouslySetInnerHTML={{ __html: weaponNode?.weapons?.weaponSkillDescription ?? "" }}></span>
                      </div>
                      <div className="w-full h-auto">
                        <span className="w-full" dangerouslySetInnerHTML={{ __html: "Regen Time: " + weaponNode?.weapons?.weaponSkillRegenTime + "s" ?? "" }}></span>  
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
            {selectedExWeapon && selectedExWeapon?.weapons?.weaponSkillVideo?.node?.mediaItemUrl && (
              <div className="w-full h-auto">
                  <LoopVideo videoSrc={selectedExWeapon?.weapons?.weaponSkillVideo?.node?.mediaItemUrl + ""} />
              </div>
            )}   
          </div>
          <div className="w-full lg:w-1/4 mb-8">
          {hero.heroInformation?.abilityFields?.partyBuff && (
            <>
              <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">Passives</h2>
                <div className="w-full h-auto">
                  {
                    selectedItem === 0 ? (
                      ascended ? 
                        hero.heroInformation?.ascentAbilities?.partyBuff?.map((passive: any) => (
                          <StatFormatter key={passive.stat} statName={passive.stat} statValue={passive.value.toString()} isPassive={true} affectsParty={passive.affectsParty} />
                        ))
                      : hero.heroInformation?.abilityFields?.partyBuff?.map((passive: any) => (
                          <StatFormatter key={passive.stat} statName={passive.stat} statValue={passive.value.toString()} isPassive={true} affectsParty={passive.affectsParty} />
                        ))
                    ) 
                    : selectedItem === 1 ? (
                      ascended ? 
                        hero.heroInformation?.ascentExAbilities?.partyBuff?.map((passive: any) => (
                          <StatFormatter key={passive.stat} statName={passive.stat} statValue={passive.value.toString()} isPassive={true} affectsParty={passive.affectsParty} />
                        ))
                      : hero.heroInformation?.exAbilities?.partyBuff?.map((passive: any) => (
                          <StatFormatter key={passive.stat} statName={passive.stat} statValue={passive.value.toString()} isPassive={true} affectsParty={passive.affectsParty} />
                        ))
                    ) 
                    : ""
                  }
                </div>
              </>
            )}
          </div>
        </div>        
      </div>
    )
}

export default Abilities;
