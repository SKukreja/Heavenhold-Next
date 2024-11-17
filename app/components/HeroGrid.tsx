"use client";

import Link from "next/link";
import { Suspense, useMemo } from "react";
import Loading from "./loading";
import FadeInImage from "./FadeInImage"; 
import { Hero } from "#/graphql/generated/types";
import { useHeroes } from './GetHeroesProvider';

export default function HeroGrid() {
  const { data } = useHeroes();

  const heroes = useMemo(() => {
    const sortedHeroes = [...(data?.heroes?.nodes ?? [])] as Hero[];
    sortedHeroes.sort((a: Hero, b: Hero) => {
      const aName = a.heroInformation?.bioFields?.name || '';
      const bName = b.heroInformation?.bioFields?.name || '';
      return aName.localeCompare(bName);
    });
    return sortedHeroes;
  }, [data]);

  if (!heroes.length) {
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div id="HeroList" className="flex flex-wrap justify-start ml-8 w-[calc(100%-4rem)] lg:w-[calc(100%-2rem)] gap-4 lg:gap-8 transform-gpu">
        {heroes.map((hero: Hero) => (
          <HeroLink key={hero.uri + hero.id} hero={hero} />
        ))}
      </div>
    </Suspense>
  );
}

const HeroLink = ({ hero }: { hero: Hero }) => {
  const bioFields = hero.heroInformation?.bioFields;
  const abilityFields = hero.heroInformation?.abilityFields;

  return (
    <Link
      href={hero.uri ?? '/'} 
      data-sort data-name={hero.heroInformation?.bioFields?.name} data-title={hero.title} data-element={hero.heroInformation?.bioFields?.element} data-rarity={hero.heroInformation?.bioFields?.rarity} data-party-buff={hero.heroInformation?.abilityFields?.partyBuff?.[0]?.stat || 'none'}
      data-filter={`${bioFields?.element?.toLowerCase()} ${bioFields?.role?.toLowerCase()} r-${bioFields?.rarity?.toString().replace(/ /g, "-").toLowerCase()} ${hero.heroInformation?.abilityFields?.partyBuff?.map(buff => buff?.affectsParty ? buff?.stat?.toString()
        .replaceAll(/ /g, "-")
        .replaceAll('[]','')
        .replaceAll(',','')
        .replaceAll('--','-')      
        .toLowerCase()
        .replaceAll('x%','x')
        .replaceAll('%', '')
        .replace('when-a-shield-is-present-damage-dealt-increases-by-x-while-damage-taken-decreases-by-x','shield-damage')
        .replace('decrease-damage-taken-by-of-increased-skill-damage','skill-damage-decreased-damage-taken') : '').join(' ')}`.trim()}
      className={`${hero.heroInformation?.abilityFields?.partyBuff?.map(buff => buff?.affectsParty ? buff?.stat?.toString()
        .replaceAll(/ /g, "-")
        .replaceAll('[]','')
        .replaceAll(',','')
        .replaceAll('--','-')      
        .toLowerCase()
        .replaceAll('x%','x')
        .replaceAll('%', '')
        .replace('when-a-shield-is-present-damage-dealt-increases-by-x-while-damage-taken-decreases-by-x','shield-damage')
        .replace('decrease-damage-taken-by-of-increased-skill-damage','skill-damage-decreased-damage-taken') : '').join(' ')} ${"e-" + bioFields?.element?.toLowerCase()} ${bioFields?.element?.toLowerCase()} r-${bioFields?.rarity?.toString().replace(/ /g, "-").toLowerCase()} ${bioFields?.role?.toLowerCase()}  aspect-[2/3] relative w-[calc((100%/2)-0.5rem)] lg:w-[calc((100%/4)-2rem)] 2xl:w-[calc((100%/5)-2rem)] 3xl:w-[calc((100%/6)-2rem)] flex cursor-pointer align-middle transition-all duration-200 after:transition-all after:linear after:duration-200 hover:after:outline-offset-[-5px] ease grayscale-[30%] hover:grayscale-0 after:w-full after:h-full after:absolute after:inset-0 after:z-20 after:pointer-events-none after:border after:border-gray-800 after:outline after:outline-2 after:outline-offset-[-10px]`}
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        <FadeInImage
          src={hero.heroInformation?.portrait?.[0]?.art?.node?.sourceUrl || 'https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg'}
          quality={100}
          fill={true} 
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          alt={hero.title ?? ''}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-between p-5 lg:p-4 pointer-events-none h-36 align-center before:bg-gradient-to-b before:from-black before:to-transparent before:w-full before:h-full before:z-20 before:absolute before:opacity-50 before:inset-0">
        <span className="relative z-20 text-xs tracking-widest text-center uppercase w-100 drop-shadow-2xl">
          {bioFields?.element && (
            <FadeInImage src={`/icons/${bioFields.element.toLowerCase()}.webp`} className="w-6 h-6 lg:w-8 lg:h-8 mb-2" width={25} height={25} alt={bioFields.element} />
          )}
          {bioFields?.role && (
            <FadeInImage src={`/icons/${bioFields.role.toLowerCase()}.webp`} className="w-6 h-6 lg:w-8 lg:h-8" width={25} height={25} alt={bioFields.role} />
          )}
        </span>
        <span className="relative z-20 text-lg font-bold text-center w-100 drop-shadow-2xl">
          {abilityFields?.chainStateTrigger && abilityFields.chainStateTrigger.toString().toLowerCase() !== "none" && (
            <FadeInImage src={`/icons/${abilityFields.chainStateTrigger.toString().toLowerCase()}.webp`} className="w-6 h-6 lg:w-8 lg:h-8 mb-2" width={25} height={25} alt={abilityFields.chainStateTrigger + ""} />
          )}
          {abilityFields?.chainStateResult && abilityFields.chainStateResult.toString().toLowerCase() !== "none" && (
            <FadeInImage src={`/icons/${abilityFields.chainStateResult.toString().toLowerCase()}.webp`} className="w-6 h-6 lg:w-8 lg:h-8 mb-2" width={25} height={25} alt={abilityFields.chainStateResult + ""} />
          )}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-4 pointer-events-none h-72 align-center before:bg-gradient-to-t before:from-black before:to-transparent before:w-full before:h-full before:z-20 before:absolute before:inset-0">
        <span className="relative z-20 text-xs tracking-widest text-center uppercase w-100 drop-shadow-2xl">
          {bioFields?.name && hero.title && hero.title.replace(bioFields.name, '').trim()}
        </span>
        <span className="relative z-20 text-2xl font-bold text-center w-100 drop-shadow-2xl">
          {bioFields?.name}
        </span>
        <span className="relative z-20 flex flex-col gap-1 m-2 leading-4 text-[0.52rem] lg:text-[0.55rem] font-bold text-center w-100 drop-shadow-2xl">
          {abilityFields?.partyBuff && abilityFields.partyBuff.map((buff, index) => (
            <>
              {buff?.affectsParty && (
                <span key={hero.id + "pbuff" + index}>[Party] {buff?.stat} <span className="text-lime-500">+{buff.value}%</span></span>
              )}
            </>
          ))}
        </span>
      </div>
    </Link>
  );
}
