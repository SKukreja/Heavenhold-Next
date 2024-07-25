"use client";

import { Hero } from "#/types";
import { useState, useEffect } from "react";
import FadeInImage from "#/app/components/FadeInImage";
import { formatDate } from "#/ui/helpers";
import StatFormatter from "#/app/components/StatFormatter";

interface AbilitiesProps {
  hero: Hero;
}

function Abilities({ hero }: AbilitiesProps) {
    const [selectedWeapon, setSelectedWeapon] = useState(0);
    const rarity = `r-${hero.heroInformation.bioFields.rarity.toString().replace(/ /g, "-").toLowerCase()}`;

    const handleWeaponClick = (index: number) => {
      setSelectedWeapon(index);
    };

    return (
      <div id="Bio" className="relative overflow-visible z-10 w-full h-[calc(100vh-12rem)] items-start flex flex-col px-4 3xl:px-8">
        <div className="px-4 3xl:px-8 w-full flex-col justify-start h-[calc(100%-8rem)] flex">
          <div className="w-full h-auto">
            <h2 className="text-xl 3xl:text-2xl font-medium uppercase tracking-widest mb-16">{hero.title.replace(hero.heroInformation.bioFields.name, '').trim()} {hero.heroInformation.bioFields.name} / Abilities</h2>            
             
            <div className="w-full flex gap-8 mb-16">
              <div className="w-[calc(25%-1.5rem)]">
                <h2 className="text-xs uppercase tracking-widest text-green-500">Normal Attack</h2>
                <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">{hero.heroInformation.abilityFields.normalAtkName}</h2>
                <div className="w-full h-auto">
                  <span className="w-full text-xs xl:text-sm" dangerouslySetInnerHTML={{ __html: hero.heroInformation.abilityFields.normalAtkDescription }}></span>
                </div>
              </div>
              <div className="w-[calc(25%-1.5rem)]">
                <h2 className="text-xs uppercase tracking-widest text-green-500">Chain Ability</h2>
                <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">{hero.heroInformation.abilityFields.chainSkillName}</h2>
                <div className="w-full h-auto">
                  <span className="w-full text-xs xl:text-sm" dangerouslySetInnerHTML={{ __html: hero.heroInformation.abilityFields.chainSkillDescription }}></span>
                </div>
              </div>
              <div className="w-[calc(25%-1.5rem)]">
                <h2 className="text-xs uppercase tracking-widest text-green-500">Special Ability</h2>
                <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">{hero.heroInformation.abilityFields.specialAbilityName}</h2>
                <div className="w-full h-auto">
                  <span className="w-full text-xs xl:text-sm" dangerouslySetInnerHTML={{ __html: hero.heroInformation.abilityFields.specialAbilityDescription }}></span>
                </div>
              </div>
              {hero.heroInformation.abilityFields.partyBuff && (<div className="w-[calc(25%-1.5rem)]">
                <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">Passives</h2>
                  <div className="w-full h-auto">
                    {hero.heroInformation.abilityFields.partyBuff.map((passive) => (
                      <StatFormatter key={passive.stat} statName={passive.stat} statValue={passive.value.toString()} isPassive={true} affectsParty={passive.affectsParty} />
                    ))}
                  </div>
                </div>)}
            </div>

            {hero.heroInformation.bioFields.exclusiveWeapon?.nodes && (
            <div className="w-full">
              <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">Exclusive Weapons</h2>
              <div className="flex gap-8 items-start justify-between w-full">
                {hero.heroInformation.bioFields.exclusiveWeapon.nodes.map((weaponNode, index) =>
                { 
                  return (
                  <div key={weaponNode.id} className={`mb-8 w-[calc(25%-2rem)] relative ${hero.heroInformation.bioFields.exclusiveWeapon.nodes.length > 1 ? 'cursor-pointer' : ''} bg-gray-800 p-4 3xl:p-8`} onClick={() => handleWeaponClick(index)}>
                    <div className={`absolute top-4 right-4 text-${hero.heroInformation.bioFields.element.toLowerCase()} ${selectedWeapon === index && hero.heroInformation.bioFields.exclusiveWeapon.nodes.length > 1 ? 'block' : 'hidden'}`}>Selected</div>
                    <div className="flex">
                      <div className="w-16 3xl:w-20">
                        <FadeInImage src={weaponNode.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} setWidth={96} className="h-auto aspect-square object-contain" width={100} height={100} alt={weaponNode.title} />
                      </div>
                      <div className="w-[calc(100%-8rem)] pl-4">
                        <h3 className="text-sm 3xl:text-lg font-bold">{weaponNode.title}</h3>
                        <h2 className="text-xs tracking-wide text-green-500">
                          {weaponNode.itemInformation?.rarity} {weaponNode.weapons?.weaponType ?? ""}
                        </h2>  
                        <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">
                          {weaponNode.weapons?.minDps ?? "?"}-{weaponNode.weapons?.maxDps ?? "?"} <span className="text-lg">DPS</span>
                        </h2>
                      </div>
                    </div>
                    <div className="text-xs flex flex-col gap-1">            
                      {weaponNode.weapons?.element && (<StatFormatter statName={weaponNode.weapons?.element + " Atk"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.weapons?.minAtk ?? "?"}-${weaponNode.weapons?.maxAtk ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Atk (%)") && (<StatFormatter statName={"Atk"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.atk ?? "?"}-${weaponNode.weapons?.maxAtk ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Heal (Flat)") && (<StatFormatter statName={"Heal (Flat)"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.healFlat ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Heal (%)") && (<StatFormatter statName={"Heal (%)"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.healPercent ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Crit Hit Chance") && (<StatFormatter statName={"Crit Hit Chance"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.critChance ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Damage Reduction") && (<StatFormatter statName={"Damage Reduction"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.damageReduction ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Def (Flat)") && (<StatFormatter statName={"Def (Flat)"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.def ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Def (%)") && (<StatFormatter statName={"Def (%)"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.def ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Weapon Skill Regen Speed") && (<StatFormatter statName={"Weapon Skill Regen Speed"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.skillRegenSpeed ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Skill Damage") && (<StatFormatter statName={"Skill Damage"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.skillDamage ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "HP (%)") && (<StatFormatter statName={"HP (%)"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.hp ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "HP (Flat)") && (<StatFormatter statName={"HP (Flat)"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.hp ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Atk increase on enemy kill") && (<StatFormatter statName={"Atk increase on enemy kill"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.atkOnKill ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "HP recovery on enemy kill") && (<StatFormatter statName={"HP recovery on enemy kill"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.hpOnKill ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Seconds of weapon skill Regen time on enemy kill") && (<StatFormatter statName={"Seconds of weapon skill Regen time on enemy kill"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.subSkillRegenOnKill ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Shield increase on battle start") && (<StatFormatter statName={"Shield increase on battle start"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.subShieldOnStart ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Shield increase on enemy kill") && (<StatFormatter statName={"Shield increase on enemy kill"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.subShieldOnKill ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Fire type Atk") && (<StatFormatter statName={"Fire Atk"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.fireTypeAtk ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Earth type Atk") && (<StatFormatter statName={"Earth Atk"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.earthTypeAtk ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Water type Atk") && (<StatFormatter statName={"Water Atk"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.waterTypeAtk ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Dark type Atk") && (<StatFormatter statName={"Dark Atk"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.darkTypeAtk ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Light type Atk") && (<StatFormatter statName={"Light Atk"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.lightTypeAtk ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Basic type Atk") && (<StatFormatter statName={"Basic Atk"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.basicTypeAtk ?? "?"}`} isPassive={false} />)}                          
                      {weaponNode.equipmentOptions?.options.find(x => x == "Atk Decrease 100.0% negated") && (<StatFormatter statName={"Atk Decrease 100.0% negated"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.subAtk ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Atk Decrease 70.0% negated") && (<StatFormatter statName={"Atk Decrease 70.0% negated"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.subAtk ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Atk Decrease 30.0% negated") && (<StatFormatter statName={"Atk Decrease 30.0% negated"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.subAtk ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Def Decrease 100.0% negated") && (<StatFormatter statName={"Def Decrease 100.0% negated"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.subDef ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Def Decrease 50.0% negated") && (<StatFormatter statName={"Def Decrease 50.0% negated"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.subDef ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Doom Damage 100.0% negated") && (<StatFormatter statName={"Doom Damage 100.0% negated"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.subDamageReduction ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Doom Damage 30.0% negated") && (<StatFormatter statName={"Doom Damage 30.0% negated"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.subDamageReduction ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Injury Damage 100.0% negated") && (<StatFormatter statName={"Injury Damage 100.0% negated"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.subDamageReduction ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Injury Damage 50.0% negated") && (<StatFormatter statName={"Injury Damage 50.0% negated"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.subDamageReduction ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "On hit extra damage") && (<StatFormatter statName={"On hit extra damage"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.onHitDamage ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "On hit heal allies") && (<StatFormatter statName={"On hit heal allies"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.onHitHealAllies ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Increase damage to enemies with HP") && (<StatFormatter statName={"Increase damage to enemies with HP"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.increaseDamageAmount ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Decrease damage taken by % of increased Skill Damage") && (<StatFormatter statName={"Decrease damage taken by % of increased Skill Damage"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.decreaseDamageTakenBySkill ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Increase damage to tanker Hero") && (<StatFormatter statName={"Increase damage to tanker Hero"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.increaseDamageToTanks ?? "?"}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options.find(x => x == "Crit Hit Multiplier") && (<StatFormatter statName={"Crit Hit Multiplier"} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.critHitMultiplier ?? "?"}`} isPassive={false} />)}
                      {weaponNode.weapons?.exclusiveEffects && (
                        <div className="text-gray-400 mt-4">
                          <span className="block">[{hero.title} only]</span>
                          <span className="w-full block text-wrap whitespace-normal" dangerouslySetInnerHTML={{ __html: weaponNode.weapons?.exclusiveEffects}}></span>
                        </div>
                      )}
                      {weaponNode.equipmentOptions?.lb5Option && (
                        <div className="text-gray-400 mt-4">
                          <span className="block">[Required Limit Break 5]</span>
                          {weaponNode.equipmentOptions?.lb5Option && (<StatFormatter statName={weaponNode.equipmentOptions?.lb5Option} element={weaponNode.weapons?.element ?? ""} statValue={`${weaponNode.equipmentOptions?.lb5Value ?? "?"}`} isPassive={false} />)}
                        </div>
                      )}
                    </div>                  
                  </div>
                  )
                })}
                
                {hero.heroInformation.bioFields.exclusiveWeapon.nodes[selectedWeapon].weapons?.weaponSkillVideo?.node?.mediaItemUrl && (
                <video width="320" height="240" className="w-[calc(50%-1rem)] h-auto" preload="none" autoPlay loop muted>
                  <source src={hero.heroInformation.bioFields.exclusiveWeapon.nodes[selectedWeapon].weapons?.weaponSkillVideo?.node?.mediaItemUrl} type="video/mp4" />
                  <track
                    src={hero.heroInformation.bioFields.exclusiveWeapon.nodes[selectedWeapon].weapons?.weaponSkillVideo?.node?.mediaItemUrl}
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>)}    
              </div>
            </div>
          )}
          </div>
        </div>        
      </div>
    )
}

export default Abilities;
