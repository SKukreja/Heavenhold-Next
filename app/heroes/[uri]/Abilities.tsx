"use client";

import { Hero } from "#/types";
import FadeInImage from "#/app/components/FadeInImage";
import { formatDate } from "#/ui/helpers";

interface AbilitiesProps {
  hero: Hero;
}

function Abilities({ hero }: AbilitiesProps) {
    const rarity = `r-${hero.heroInformation.bioFields.rarity.toString().replace(/ /g, "-").toLowerCase()}`;

    return (
      <div id="Bio" className="relative overflow-visible z-10 w-full h-[calc(100vh-12rem)] items-start flex px-8">
        <div className="px-8 w-2/4 flex-col justify-start h-[calc(100%-8rem)] flex">
          <div className="w-full h-auto whitespace-nowrap">
            <h2 className="text-2xl font-medium uppercase tracking-widest mb-3">{hero.title.replace(hero.heroInformation.bioFields.name, '').trim()}</h2>
            <h1 className="text-8xl font-extrabold font-oswald -ml-1 tracking-wide mb-6">{hero.heroInformation.bioFields.name}</h1>
            <div className={`flex gap-4 mb-16 align-middle `}>
              {hero.heroInformation.bioFields.element && (
                <FadeInImage src={`/icons/${hero.heroInformation.bioFields.element.toLowerCase()}.webp`} className="flex flex-col justify-center h-full object-contain" width={30} height={30} alt={hero.heroInformation.bioFields.element} />
              )}
              {hero.heroInformation.bioFields.role && (
                <FadeInImage src={`/icons/${hero.heroInformation.bioFields.role.toLowerCase()}.webp`} className="flex flex-col justify-center h-full object-contain" width={30} height={30} alt={hero.heroInformation.bioFields.role} />
              )}
              <span className={`text-2xl mb-1 tracking-widest h-full flex flex-col justify-center ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>{rarity === 'r-3-star' && '★★★'}{rarity === 'r-2-star' && '★★'}{rarity === 'r-1-star' && '★'}</span>
            </div>
            {hero.heroInformation.bioFields.exclusiveWeapon.nodes && (
            <div>
              <h2 className="mb-6 text-4xl font-medium font-oswald">Exclusive Weapons</h2>
              {hero.heroInformation.bioFields.exclusiveWeapon.nodes.map((weaponNode) =>
              { 
                console.log(weaponNode)
                return (
                <div key={weaponNode.id} className="mb-8 max-w-full bg-gray-800 p-8">
                  <div className="flex">
                    <div className="w-20">
                      <FadeInImage src={weaponNode.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} setWidth={96} className="h-auto aspect-square object-contain" width={100} height={100} alt={weaponNode.title} />
                    </div>
                    <div className="w-[calc(100%-8rem)] pl-4">
                      <h3 className="text-lg font-bold">{weaponNode.title}</h3>
                      <h2 className="text-xs tracking-widest text-green-500">
                        {weaponNode.itemInformation?.rarity} {weaponNode.weapons?.weaponType ?? ""}
                      </h2>  
                      <h2 className="mb-6 text-4xl font-medium font-oswald">
                        {weaponNode.weapons?.minDps}-{weaponNode.weapons?.maxDps} <span className="text-lg">DPS</span>
                      </h2>
                    </div>
                  </div>
                  <div>                      
                    <p>{weaponNode.weapons?.element} Atk {weaponNode.weapons?.minAtk}-{weaponNode.weapons?.maxAtk}</p>
                  </div>                  
                </div>
                )
              })}
            </div>
          )}
          </div>
        </div>
        <div className="w-2/4 h-full px-8">
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-widest text-green-500">Normal Attack</h2>
            <h2 className="mb-6 text-4xl font-medium font-oswald">{hero.heroInformation.abilityFields.normalAtkName}</h2>
            <div className="w-full h-auto">
              <span className="w-full text-xs xl:text-sm" dangerouslySetInnerHTML={{ __html: hero.heroInformation.abilityFields.normalAtkDescription }}></span>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-widest text-green-500">Chain Ability</h2>
            <h2 className="mb-6 text-4xl font-medium font-oswald">{hero.heroInformation.abilityFields.chainSkillName}</h2>
            <div className="w-full h-auto">
              <span className="w-full text-xs xl:text-sm" dangerouslySetInnerHTML={{ __html: hero.heroInformation.abilityFields.chainSkillDescription }}></span>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-widest text-green-500">Special Ability</h2>
            <h2 className="mb-6 text-4xl font-medium font-oswald">{hero.heroInformation.abilityFields.specialAbilityName}</h2>
            <div className="w-full h-auto">
              <span className="w-full text-xs xl:text-sm" dangerouslySetInnerHTML={{ __html: hero.heroInformation.abilityFields.specialAbilityDescription }}></span>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-widest text-green-500">Passives</h2>
            <h2 className="mb-6 text-4xl font-medium font-oswald">{hero.heroInformation.abilityFields.specialAbilityName}</h2>
            <div className="w-full h-auto">
              <span className="w-full text-xs xl:text-sm" dangerouslySetInnerHTML={{ __html: hero.heroInformation.abilityFields.specialAbilityDescription }}></span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Abilities;
