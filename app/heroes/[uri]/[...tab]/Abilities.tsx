"use client";

import { Hero, Item } from "#/graphql/generated/types";
import { useState } from "react";
import FadeInImage from "#/app/components/FadeInImage";
import StatFormatter from "#/app/components/StatFormatter";
import { normal, special, arrowUpRight, arrowDownLeft } from "#/ui/icons";
import LoopVideo from "#/app/components/LoopVideo";

interface AbilitiesProps {
  hero: Hero;
  items: Item[];
}

function Abilities({ hero, items }: AbilitiesProps) {
    const [selectedWeapon, setSelectedWeapon] = useState(0);
    const [ascended, setAscended] = useState(false);

    const handleWeaponClick = (index: number) => {
      setSelectedWeapon(index);
    };

    const handleAscendClick = () => {
      setAscended(!ascended);
    };
   
    return (
      <div id="Abilities" className="relative overflow-visible z-20 pt-8 lg:pt-0 w-full h-auto items-start flex flex-col text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg px-4 3xl:px-8">
        <div className="px-4 3xl:px-8 w-full justify-start h-auto flex flex-col lg:flex-row">
        {hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes && (
            <div className="w-full lg:w-1/4 h-auto flex flex-col pr-0 lg:pr-8">              
              <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">Exclusive Weapons</h2>
              <div className="flex flex-col gap-8 justify-between items-start w-full">
                {hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes.map((weapon, index) =>
                { 
                  const weaponNode = weapon as Item;
                  const item = items.find(x => x.id === weaponNode.id);
                  const element = item?.equipmentOptions?.mainStats?.find((x) => x?.stat?.includes("Fire") || x?.stat?.includes("Earth") || x?.stat?.includes("Water"))?.stat?.toString().replace(" Atk", "")
                  console.log(item);
                    return (
                    <div key={weaponNode.id} className={`w-full relative ${hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes?.length ?? 0 > 1 ? 'cursor-pointer' : ''} ${selectedWeapon === index ? 'bg-gray-800' : 'bg-gray-900'} p-4 3xl:p-8`} onClick={() => handleWeaponClick(index)}>
                    <div className={`absolute top-4 right-4 text-${hero.heroInformation?.bioFields?.element?.toLowerCase()} ${selectedWeapon === index && (hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes?.length ?? 0) > 1 ? 'block' : 'hidden'}`}>Selected</div>
                    <div className="flex">
                      <div className="w-16 3xl:w-20">
                      <FadeInImage src={item?.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} setWidth={96} className="h-auto aspect-square object-contain" width={100} height={100} alt={weaponNode.title + ""} />
                      </div>
                      <div className="w-[calc(100%-8rem)] pl-4">
                      <h3 className="text-sm 3xl:text-lg font-bold">{(weaponNode).title ?? ""}</h3>
                      <h2 className="tracking-wide text-green-500">
                        {weaponNode.weapons?.weaponType ?? ""}
                      </h2>  
                      <h2 className={`${selectedWeapon === index ? 'mb-6' : 'mb-0'} text-2xl 3xl:text-4xl font-medium font-oswald`}>
                        {item?.weapons?.minDps + ""}-{item?.weapons?.maxDps + ""} <span className="text-lg">DPS</span>
                      </h2>
                      </div>
                    </div>
                    <div className={`flex flex-col gap-1 overflow-hidden ${selectedWeapon === index ? 'h-auto' : 'h-0'} text-xs 3xl:text-sm 4xl:text-base`}>
                      {item?.equipmentOptions?.mainStats ? (
                      item.equipmentOptions.mainStats.map((stat, index) => {                       
                        return (
                          <StatFormatter
                            statName={stat?.stat + ""}
                            element={element?.toLowerCase()}
                            isRange={stat?.isRange || false}
                            statValue={stat?.value + ""}
                            minValue={stat?.minValue + ""}
                            maxValue={stat?.maxValue + ""}
                            isPassive={false}
                            key={weaponNode.id + "-main-stat-" + index}
                          />
                        );
                      })
                      ) : null}
                      {item?.weapons?.exclusiveEffects && (
                        <div className="text-gray-400 mt-4">
                          <span className="block">[{hero.title} only]</span>
                          <span className="w-full block text-wrap whitespace-normal" dangerouslySetInnerHTML={{ __html: item?.weapons?.exclusiveEffects.replace(/(\r\n|\r|\n){2,}/g, '\n').replace(/<br\s*\/?>/gi, '\n') }}></span>
                        </div>
                      )}
                      {item?.equipmentOptions?.lb5Option && (
                        <div className="text-gray-400 mt-4">
                          <span className="block">[Required Limit Break 5]</span>
                          {item?.equipmentOptions?.lb5Option && (<StatFormatter statName={item.equipmentOptions?.lb5Option + ""} element={element + ""} statValue={`${item.equipmentOptions?.lb5Value + ""}`} isPassive={false} />)}
                        </div>
                      )}
                      {item?.equipmentOptions?.subStats && (
                        <div className="mt-4">
                          <span className="w-full flex justify-between"><span>[Sub-Option]</span><span>0 to {item.equipmentOptions.maxSubOptionLines} abilities granted</span></span>
                          {item.equipmentOptions.subStats.map((stat, index) => {                       
                            return (
                              <StatFormatter
                                statName={stat?.stat + ""}
                                element={element?.toLowerCase()}
                                isRange={stat?.isRange || false}
                                statValue={stat?.value + ""}
                                minValue={stat?.minValue + ""}
                                maxValue={stat?.maxValue + ""}
                                isPassive={false}
                                key={weaponNode.id + "-sub-stat-" + index}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>
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
            </div>) : (<div className="w-full flex gap-8 cursor-pointer mb-6 text-2xl 3xl:text-4xl font-medium font-oswald uppercase">
              <h2 className="text-white flex items-center justify-center">&nbsp;</h2>
            </div>)}
            <div className="w-full flex gap-8 flex-wrap">
              <div className="w-[calc(100%)] py-8 pl-4 pr-8 bg-gray-transparent mb-2 flex items-center">
                <div className="w-1/5 h-32 flex justify-center items-center pr-4">
                <FadeInImage src={normal} alt={'Normal Attack Icon'} width={40} height={40} />
                </div>
                <div className="w-4/5">
                  <h2 className="uppercase tracking-widest text-green-500 text-xs flex">Normal Attack</h2>
                  <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">
                  {
                    selectedWeapon === 0 ? (ascended ? hero.heroInformation?.ascentAbilities?.normalAtkName : hero.heroInformation?.abilityFields?.normalAtkName) : 
                    selectedWeapon === 1 ? (ascended ? hero.heroInformation?.ascentExAbilities?.normalAtkName : hero.heroInformation?.exAbilities?.normalAtkName) : ""
                  }
                  </h2>
                  <div className="w-full h-auto">
                    <span className="w-full" dangerouslySetInnerHTML={{ __html: 
                      selectedWeapon === 0 ? (ascended ? hero.heroInformation?.ascentAbilities?.normalAtkDescription : hero.heroInformation?.abilityFields?.normalAtkDescription) + "" : 
                      selectedWeapon === 1 ? (ascended ? hero.heroInformation?.ascentExAbilities?.normalAtkDescription : hero.heroInformation?.exAbilities?.normalAtkDescription) + "" : ""
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
                    selectedWeapon === 0 ? (ascended ? hero.heroInformation?.ascentAbilities?.specialAbilityName : hero.heroInformation?.abilityFields?.specialAbilityName) + "" : 
                    selectedWeapon === 1 ? (ascended ? hero.heroInformation?.ascentExAbilities?.specialAbilityName : hero.heroInformation?.exAbilities?.specialAbilityName) + "" : ""
                  }
                </h2>
                <div className="w-full h-auto">
                  <span className="w-full" dangerouslySetInnerHTML={{ __html: 
                  selectedWeapon === 0 ? (ascended ? hero.heroInformation?.ascentAbilities?.specialAbilityDescription : hero.heroInformation?.abilityFields?.specialAbilityDescription) + "" : 
                  selectedWeapon === 1 ? (ascended ? hero.heroInformation?.ascentExAbilities?.specialAbilityDescription : hero.heroInformation?.exAbilities?.specialAbilityDescription) + "" : ""
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
                    selectedWeapon === 0 ? (ascended ? hero.heroInformation?.ascentAbilities?.chainSkillName : hero.heroInformation?.abilityFields?.chainSkillName) + "" : 
                    selectedWeapon === 1 ? (ascended ? hero.heroInformation?.ascentExAbilities?.chainSkillName : hero.heroInformation?.exAbilities?.chainSkillName) + "" : ""
                  }
                  </h2>
                  <div className="w-full h-auto">
                    <span className="w-full" dangerouslySetInnerHTML={{ __html: 
                    selectedWeapon === 0 ? (ascended ? hero.heroInformation?.ascentAbilities?.chainSkillDescription : hero.heroInformation?.abilityFields?.chainSkillDescription) + "" : 
                    selectedWeapon === 1 ? (ascended ? hero.heroInformation?.ascentExAbilities?.chainSkillDescription : hero.heroInformation?.exAbilities?.chainSkillDescription) + "" : ""
                    }}></span>
                  </div>
                </div>
              </div>
              {hero.heroInformation?.bioFields?.exclusiveWeapon && (() => {
                const weapon = hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes[selectedWeapon] as Item;
                const weaponNode = items.find(x => x.id === weapon.id);
                return (
                  <div className="w-[calc(100%)] py-8 pl-4 pr-8 bg-gray-transparent mb-8 flex items-center">
                    <div className="w-1/5 h-32 flex justify-center items-center pr-4">
                      <FadeInImage src={'/icons/' + weaponNode?.weapons?.weaponSkillChain?.toString().toLowerCase() + '.webp'} alt={'Chain Trigger ' + hero.heroInformation?.abilityFields?.chainStateTrigger} width={40} height={40} />
                    </div>
                    <div>
                      <h2 className="uppercase tracking-widest text-green-500 text-xs">Weapon Skill</h2>
                      <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">{weaponNode?.weapons?.weaponSkillName}</h2>
                      <div className="w-4/5 h-auto">
                        <span className="w-full" dangerouslySetInnerHTML={{ __html: weaponNode?.weapons?.weaponSkillDescription ?? "" }}></span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
            <div className="w-full mb-8">
              {hero.heroInformation?.bioFields?.exclusiveWeapon && hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes[selectedWeapon] as Item && (hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes[selectedWeapon] as Item).weapons?.weaponSkillVideo?.node?.mediaItemUrl && (
                <LoopVideo videoSrc={(hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes[selectedWeapon] as Item).weapons?.weaponSkillVideo?.node?.mediaItemUrl + ""} />
              )}   
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-8">
          {hero.heroInformation?.abilityFields?.partyBuff && (
            <>
              <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">Passives</h2>
                <div className="w-4/5 h-auto">
                  {
                    selectedWeapon === 0 ? (
                      ascended ? 
                        hero.heroInformation?.ascentAbilities?.partyBuff?.map((passive: any) => (
                          <StatFormatter key={passive.stat} statName={passive.stat} statValue={passive.value.toString()} isPassive={true} affectsParty={passive.affectsParty} />
                        ))
                      : hero.heroInformation?.abilityFields?.partyBuff?.map((passive: any) => (
                          <StatFormatter key={passive.stat} statName={passive.stat} statValue={passive.value.toString()} isPassive={true} affectsParty={passive.affectsParty} />
                        ))
                    ) 
                    : selectedWeapon === 1 ? (
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
