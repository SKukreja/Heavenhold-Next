"use client";

import { Hero, Item } from "#/graphql/generated/types";
import { useState, useEffect } from "react";
import FadeInImage from "#/app/components/FadeInImage";
import { formatDate } from "#/ui/helpers";
import StatFormatter from "#/app/components/StatFormatter";
import { normal, special, arrowUpRight, arrowDownLeft } from "#/ui/icons";
import LoopVideo from "#/app/components/LoopVideo";

interface AbilitiesProps {
  hero: Hero;
}

function Abilities({ hero }: AbilitiesProps) {
    const [selectedWeapon, setSelectedWeapon] = useState(0);
    const [ascended, setAscended] = useState(false);

    const handleWeaponClick = (index: number) => {
      setSelectedWeapon(index);
    };

    const handleAscendClick = () => {
      setAscended(!ascended);
    };

    return (
      <div id="Abilities" className="relative overflow-visible z-20 w-full h-auto items-start flex flex-col text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg px-4 3xl:px-8">
        <div className="px-4 3xl:px-8 w-full justify-start h-auto flex flex-col lg:flex-row">
        {hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes && (
            <div className="w-full lg:w-1/4 h-auto flex flex-col pr-0 lg:pr-8">              
              <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">Exclusive Weapons</h2>
              <div className="flex flex-col gap-8 justify-between items-start w-full">
                {hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes.map((weapon, index) =>
                { 
                  const weaponNode = weapon as Item;
                  return (
                  <div key={weaponNode.id} className={`w-full relative ${hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes?.length ?? 0 > 1 ? 'cursor-pointer' : ''} ${selectedWeapon === index ? 'bg-gray-800' : 'bg-gray-900'} p-4 3xl:p-8`} onClick={() => handleWeaponClick(index)}>
                    <div className={`absolute top-4 right-4 text-${hero.heroInformation?.bioFields?.element?.toLowerCase()} ${selectedWeapon === index && (hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes?.length ?? 0) > 1 ? 'block' : 'hidden'}`}>Selected</div>
                    <div className="flex">
                      <div className="w-16 3xl:w-20">
                        <FadeInImage src={weaponNode.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} setWidth={96} className="h-auto aspect-square object-contain" width={100} height={100} alt={weaponNode.title + ""} />
                      </div>
                      <div className="w-[calc(100%-8rem)] pl-4">
                        <h3 className="text-sm 3xl:text-lg font-bold">{(weaponNode).title ?? ""}</h3>
                        <h2 className="tracking-wide text-green-500">
                          {weaponNode.weapons?.weaponType ?? ""}
                        </h2>  
                        <h2 className={`${selectedWeapon === index ? 'mb-6' : 'mb-0'} text-2xl 3xl:text-4xl font-medium font-oswald`}>
                          {weaponNode.weapons?.minDps + ""}-{weaponNode.weapons?.maxDps + ""} <span className="text-lg">DPS</span>
                        </h2>
                      </div>
                    </div>
                    <div className={`flex flex-col gap-1 overflow-hidden ${selectedWeapon === index ? 'h-auto' : 'h-0'} text-xs 3xl:text-sm 4xl:text-base`}>
                      {weaponNode.weapons?.element && (<StatFormatter statName={weaponNode.weapons?.element + " Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.weapons?.minAtk + ""}-${weaponNode.weapons?.maxAtk + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Atk (%)") && (<StatFormatter statName={"Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.atk + ""}-${weaponNode.weapons?.maxAtk + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Heal (Flat)") && (<StatFormatter statName={"Heal (Flat)"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.healFlat + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Heal (%)") && (<StatFormatter statName={"Heal (%)"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.healPercent + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Crit Hit Chance") && (<StatFormatter statName={"Crit Hit Chance"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.critChance + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Damage Reduction") && (<StatFormatter statName={"Damage Reduction"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.damageReduction + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Def (Flat)") && (<StatFormatter statName={"Def (Flat)"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.defFlat + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Def (%)") && (<StatFormatter statName={"Def (%)"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.def + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Weapon Skill Regen Speed") && (<StatFormatter statName={"Weapon Skill Regen Speed"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.skillRegenSpeed + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Skill Damage") && (<StatFormatter statName={"Skill Damage"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.skillDamage + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "HP (%)") && (<StatFormatter statName={"HP (%)"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.hp + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "HP (Flat)") && (<StatFormatter statName={"HP (Flat)"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.hp + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Atk increase on enemy kill") && (<StatFormatter statName={"Atk increase on enemy kill"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.atkOnKill + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "HP recovery on enemy kill") && (<StatFormatter statName={"HP recovery on enemy kill"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.hpOnKill + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Seconds of weapon skill Regen time on enemy kill") && (<StatFormatter statName={"Seconds of weapon skill Regen time on enemy kill"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.skillRegenOnKill + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Shield increase on battle start") && (<StatFormatter statName={"Shield increase on battle start"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.shieldOnStart + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Shield increase on enemy kill") && (<StatFormatter statName={"Shield increase on enemy kill"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.shieldOnKill + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Fire type Atk") && (<StatFormatter statName={"Fire Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.fireTypeAtk + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Earth type Atk") && (<StatFormatter statName={"Earth Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.earthTypeAtk + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Water type Atk") && (<StatFormatter statName={"Water Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.waterTypeAtk + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Dark type Atk") && (<StatFormatter statName={"Dark Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.darkTypeAtk + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Light type Atk") && (<StatFormatter statName={"Light Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.lightTypeAtk + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Basic type Atk") && (<StatFormatter statName={"Basic Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.basicTypeAtk + ""}`} isPassive={false} />)}                          
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Atk Decrease 100.0% negated") && (<StatFormatter statName={"Atk Decrease 100.0% negated"} element={weaponNode.weapons?.element + ""} statValue={""} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Atk Decrease 70.0% negated") && (<StatFormatter statName={"Atk Decrease 70.0% negated"} element={weaponNode.weapons?.element + ""} statValue={""} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Atk Decrease 30.0% negated") && (<StatFormatter statName={"Atk Decrease 30.0% negated"} element={weaponNode.weapons?.element + ""} statValue={""} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Def Decrease 100.0% negated") && (<StatFormatter statName={"Def Decrease 100.0% negated"} element={weaponNode.weapons?.element + ""} statValue={""} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Def Decrease 50.0% negated") && (<StatFormatter statName={"Def Decrease 50.0% negated"} element={weaponNode.weapons?.element + ""} statValue={""} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Doom Damage 100.0% negated") && (<StatFormatter statName={"Doom Damage 100.0% negated"} element={weaponNode.weapons?.element + ""} statValue={""} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Doom Damage 30.0% negated") && (<StatFormatter statName={"Doom Damage 30.0% negated"} element={weaponNode.weapons?.element + ""} statValue={""} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Injury Damage 100.0% negated") && (<StatFormatter statName={"Injury Damage 100.0% negated"} element={weaponNode.weapons?.element + ""} statValue={""} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Injury Damage 50.0% negated") && (<StatFormatter statName={"Injury Damage 50.0% negated"} element={weaponNode.weapons?.element + ""} statValue={""} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "On hit extra damage") && (<StatFormatter statName={"On hit extra damage"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.onHitDamage + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "On hit heal allies") && (<StatFormatter statName={"On hit heal allies"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.onHitHealAllies + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Increase damage to enemies with HP") && (<StatFormatter statName={"Increase damage to enemies with HP"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.increaseDamageAmount + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Decrease damage taken by % of increased Skill Damage") && (<StatFormatter statName={"Decrease damage taken by % of increased Skill Damage"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.decreaseDamageTakenBySkill + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Increase damage to tanker Hero") && (<StatFormatter statName={"Increase damage to tanker Hero"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.increaseDamageToTanks + ""}`} isPassive={false} />)}
                      {weaponNode.equipmentOptions?.options?.find(x => x == "Crit Hit Multiplier") && (<StatFormatter statName={"Crit Hit Multiplier"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.critHitMultiplier + ""}`} isPassive={false} />)}
                      {weaponNode.weapons?.exclusiveEffects && (
                        <div className="text-gray-400 mt-4">
                          <span className="block">[{hero.title} only]</span>
                          <span className="w-full block text-wrap whitespace-normal" dangerouslySetInnerHTML={{ __html: weaponNode.weapons?.exclusiveEffects}}></span>
                        </div>
                      )}
                      {weaponNode.equipmentOptions?.lb5Option && (
                        <div className="text-gray-400 mt-4">
                          <span className="block">[Required Limit Break 5]</span>
                          {weaponNode.equipmentOptions?.lb5Option && (<StatFormatter statName={weaponNode.equipmentOptions?.lb5Option + ""} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentOptions?.lb5Value + ""}`} isPassive={false} />)}
                        </div>
                      )}
                      {weaponNode.equipmentSubOptions?.subOptions && (
                        <div className="mt-4">
                          <span className="w-full flex justify-between"><span>[Sub-Option]</span><span>0 to {weaponNode.equipmentSubOptions.maxLines} abilities granted</span></span>
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Atk (%)") && (<StatFormatter statName={"Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subAtk + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Heal (Flat)") && (<StatFormatter statName={"Heal (Flat)"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subHealFlat + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Heal (%)") && (<StatFormatter statName={"Heal (%)"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subHealPercent + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Crit Hit Chance") && (<StatFormatter statName={"Crit Hit Chance"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subCritChance + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Damage Reduction") && (<StatFormatter statName={"Damage Reduction"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subDamageReduction + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Def (Flat)") && (<StatFormatter statName={"Def (Flat)"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subDefFlat + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Def (%)") && (<StatFormatter statName={"Def (%)"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subDef + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Weapon Skill Regen Speed") && (<StatFormatter statName={"Weapon Skill Regen Speed"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subSkillRegenSpeed + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Skill Damage") && (<StatFormatter statName={"Skill Damage"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subSkillDamage + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "HP (%)") && (<StatFormatter statName={"HP (%)"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subHp + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Atk increase on enemy kill") && (<StatFormatter statName={"Atk increase on enemy kill"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subAtkOnKill + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "HP recovery on enemy kill") && (<StatFormatter statName={"HP recovery on enemy kill"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subHpOnKill + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Seconds of weapon skill Regen time on enemy kill") && (<StatFormatter statName={"Seconds of weapon skill Regen time on enemy kill"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subSkillRegenOnKill + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Shield increase on battle start") && (<StatFormatter statName={"Shield increase on battle start"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subShieldOnStart + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Shield increase on enemy kill") && (<StatFormatter statName={"Shield increase on enemy kill"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subShieldOnKill + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Fire type Atk") && (<StatFormatter statName={"Fire Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subFireTypeAtk + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Earth type Atk") && (<StatFormatter statName={"Earth Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subEarthTypeAtk + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Water type Atk") && (<StatFormatter statName={"Water Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subWaterTypeAtk + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Dark type Atk") && (<StatFormatter statName={"Dark Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subDarkTypeAtk + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Light type Atk") && (<StatFormatter statName={"Light Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subLightTypeAtk + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Basic type Atk") && (<StatFormatter statName={"Basic Atk"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subBasicTypeAtk + ""}`} isPassive={false} />)}                          
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Atk Decrease 100.0% negated") && (<StatFormatter statName={"Atk Decrease 100.0% negated"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subAtk + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Atk Decrease 70.0% negated") && (<StatFormatter statName={"Atk Decrease 70.0% negated"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subAtk + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Atk Decrease 30.0% negated") && (<StatFormatter statName={"Atk Decrease 30.0% negated"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subAtk + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Def Decrease 100.0% negated") && (<StatFormatter statName={"Def Decrease 100.0% negated"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subDef + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Def Decrease 50.0% negated") && (<StatFormatter statName={"Def Decrease 50.0% negated"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subDef + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Doom Damage 100.0% negated") && (<StatFormatter statName={"Doom Damage 100.0% negated"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subDamageReduction + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Doom Damage 30.0% negated") && (<StatFormatter statName={"Doom Damage 30.0% negated"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subDamageReduction + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Injury Damage 100.0% negated") && (<StatFormatter statName={"Injury Damage 100.0% negated"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subDamageReduction + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Injury Damage 50.0% negated") && (<StatFormatter statName={"Injury Damage 50.0% negated"} element={weaponNode.weapons?.element + ""} statValue={`${weaponNode.equipmentSubOptions?.subDamageReduction + ""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "On hit extra damage") && (<StatFormatter statName={"On hit extra damage"} element={weaponNode.weapons?.element + ""} statValue={`${""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "On hit heal allies") && (<StatFormatter statName={"On hit heal allies"} element={weaponNode.weapons?.element + ""} statValue={`${""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Increase damage to enemies with HP") && (<StatFormatter statName={"Increase damage to enemies with HP"} element={weaponNode.weapons?.element + ""} statValue={`${""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Decrease damage taken by % of increased Skill Damage") && (<StatFormatter statName={"Decrease damage taken by % of increased Skill Damage"} element={weaponNode.weapons?.element + ""} statValue={`${""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Increase damage to tanker Hero") && (<StatFormatter statName={"Increase damage to tanker Hero"} element={weaponNode.weapons?.element + ""} statValue={`${""}`} isPassive={false} />)}
                          {weaponNode.equipmentSubOptions?.subOptions.find(x => x == "Crit Hit Multiplier") && (<StatFormatter statName={"Crit Hit Multiplier"} element={weaponNode.weapons?.element + ""} statValue={`${""}`} isPassive={false} />)}
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
            <div className="w-full flex gap-8 cursor-pointer mb-6 text-2xl 3xl:text-4xl font-medium font-oswald uppercase" onClick={() => handleAscendClick()}>
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
              {hero.heroInformation?.bioFields?.exclusiveWeapon &&
              <div className="w-[calc(100%)] py-8 pl-4 pr-8 bg-gray-transparent mb-8 flex items-center">
                <div className="w-1/5 h-32 flex justify-center items-center pr-4">
                  <FadeInImage src={'/icons/' + (hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes[selectedWeapon] as Item).weapons?.weaponSkillChain?.toString().toLowerCase() + '.webp'} alt={'Chain Trigger ' + hero.heroInformation?.abilityFields?.chainStateTrigger} width={40} height={40} />
                </div>
                <div>
                  <h2 className="uppercase tracking-widest text-green-500 text-xs">Weapon Skill</h2>
                  <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">{(hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes[selectedWeapon] as Item)?.weapons?.weaponSkillName}</h2>
                  <div className="w-4/5 h-auto">
                    <span className="w-full" dangerouslySetInnerHTML={{ __html: (hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes[selectedWeapon] as Item)?.weapons?.weaponSkillDescription ?? "" }}></span>
                  </div>
                </div>
              </div>}
            </div>
            <div className="w-full mb-8">
              {(hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes[selectedWeapon] as Item).weapons?.weaponSkillVideo?.node?.mediaItemUrl && (
                <LoopVideo videoSrc={(hero.heroInformation?.bioFields?.exclusiveWeapon?.nodes[selectedWeapon] as Item).weapons?.weaponSkillVideo?.node?.mediaItemUrl + ""} />
              )}   
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-2">
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
