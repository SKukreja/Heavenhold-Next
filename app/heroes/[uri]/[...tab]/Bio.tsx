"use client";

import { formatDate } from "#/ui/helpers";
import FadeInImage from "#/app/components/FadeInImage";
import { Hero } from "#/graphql/generated/types";
import { equipmentIcons } from "#/ui/icons";

interface BioProps {
  hero: Hero;
}

function Bio({ hero }: BioProps) {
  const rarity = `r-${hero.heroInformation?.bioFields?.rarity?.toString().replace(/ /g, "-").toLowerCase() ?? ""}`;

  return (
    <>
      <div className="w-full h-auto whitespace-nowrap px-8 relative z-20">          
        <div className={`flex gap-4 align-middle `}>
          {hero.heroInformation?.bioFields?.element && (
            <FadeInImage src={`/icons/${hero.heroInformation.bioFields.element.toLowerCase()}.webp`} className="flex flex-col justify-center h-full object-contain" width={24} height={24} alt={hero.heroInformation.bioFields.element} />
          )}
          {hero.heroInformation?.bioFields?.role && (
            <FadeInImage src={`/icons/${hero.heroInformation.bioFields.role.toLowerCase()}.webp`} className="flex flex-col justify-center h-full object-contain" width={24} height={24} alt={hero.heroInformation.bioFields.role} />
          )}
          <span className={`text-2xl mb-1 tracking-widest h-full flex flex-col justify-center ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>{rarity === 'r-3-star' && '★★★'}{rarity === 'r-2-star' && '★★'}{rarity === 'r-1-star' && '★'}</span>
        </div>
      </div>
      <div id="Bio" className="relative lg:overflow-visible z-20 w-full h-auto lg:h-[calc(100vh-12rem)] items-start flex px-4 3xl:px-8 flex-col lg:flex-row">
        <div className="flex flex-col-reverse w-full lg:h-full lg:w-3/4 lg:flex-row">        
          <div className="px-4 3xl:px-8 w-full lg:w-1/3 flex-col justify-start h-[calc(100%-8rem)] flex mb-16 lg:mb-0">
            <div className="pt-8 lg:pt-16 flex flex-col gap-4 3xl:gap-6 justify-between w-full text-xs 3xl:text-sm">
              <div className="w-full"><span className="w-1/2 inline-block font-bold">Name</span><span className="w-1/2 inline-block text-right">{hero.heroInformation?.bioFields?.name}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Released</span><span className="w-1/2 inline-block text-right">{formatDate(hero.heroInformation?.bioFields?.naReleaseDate ?? "")}</span></div>
              <div className="w-full"><span className="w-1/2 inline-block font-bold">Age</span><span className="w-1/2 inline-block text-right">{hero.heroInformation?.bioFields?.age}</span></div>
              <div className="w-full"><span className="w-1/2 inline-block font-bold">Height</span><span className="w-1/2 inline-block text-right">{hero.heroInformation?.bioFields?.height}</span></div>
              <div className="w-full"><span className="w-1/2 inline-block font-bold">Weight</span><span className="w-1/2 inline-block text-right">{hero.heroInformation?.bioFields?.weight}</span></div>
              <div className="w-full"><span className="w-1/2 inline-block font-bold">Species</span><span className="w-1/2 inline-block text-right">{hero.heroInformation?.bioFields?.species}</span></div>
                <div className="w-full">
                  <span className="w-1/2 inline-block font-bold">Equipment</span>
                  <span className="w-1/2 inline-flex items-center justify-end text-right">
                    {hero.heroInformation?.bioFields?.compatibleEquipment?.map((equipment) => (
                      <span className="" key={"eq-" + equipment}>
                        <FadeInImage src={equipmentIcons[equipment as keyof typeof equipmentIcons]} className="-mb-2" setWidth={30} width={30} height={30} alt={equipment ?? ""} />
                      </span>
                    ))}
                  </span>
                </div>
            </div>
            <div className="pt-16 block relative tracking-wider">
                <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">Stats</h2>
                <div className="mb-2 relative h-8 bg-gray-1100">
                  <div className="bg-red-600 h-8 rounded-sm progress-bar text-xs" style={{ width: `${Math.max((1 - (hero.heroInformation?.statFields?.atkRank ?? 0) / (hero.heroInformation?.statFields?.heroCount ?? 1)) * 100, 10)}%` }}></div>
                  <div className="absolute inset-0 px-4 flex justify-between items-center text-xs">
                    <span className="font-bold">ATK {hero.heroInformation?.statFields?.atk}</span>
                    <span>RANK: {hero.heroInformation?.statFields?.atkRank ?? 0}/{hero.heroInformation?.statFields?.heroCount ?? 1}</span>
                  </div>
                </div>

                <div className="mb-2 relative h-8 bg-gray-1100">
                  <div className="bg-green-600 h-8 rounded-sm progress-bar" style={{ width: `${Math.max((1 - (hero.heroInformation?.statFields?.hpRank ?? 0) / (hero.heroInformation?.statFields?.heroCount ?? 1)) * 100, 10)}%` }}></div>
                  <div className="absolute inset-0 px-4 flex justify-between items-center text-xs">
                  <span className="font-bold">HP {hero.heroInformation?.statFields?.hp}</span>
                  {hero.heroInformation?.statFields?.hpRank ? (<span>RANK: {hero.heroInformation.statFields.hpRank}/{hero.heroInformation.statFields.heroCount}</span>) : (<span>UNRANKED</span>)}
                  </div>
                </div>

                <div className="mb-2 relative h-8 bg-gray-1100">
                    <div className="bg-blue-600 h-8 rounded-sm progress-bar" style={{ width: `${Math.max((1 - (hero.heroInformation?.statFields?.defRank ?? 0) / (hero.heroInformation?.statFields?.heroCount ?? 1)) * 100, 10)}%` }}></div>
                    <div className="absolute inset-0 px-4 flex justify-between items-center text-xs">
                    <span className="font-bold">DEF {hero.heroInformation?.statFields?.def}</span>
                    {hero.heroInformation?.statFields?.defRank ? (<span>RANK: {hero.heroInformation.statFields.defRank}/{hero.heroInformation.statFields.heroCount}</span>) : (<span>UNRANKED</span>)}
                    </div>
                </div>

                {(hero.heroInformation?.statFields?.damageReduction ?? 0) > 0 && (
                  <div className="mb-2 relative h-8 bg-gray-1100">
                    <div className="bg-purple-500 h-8 rounded-sm progress-bar" style={{ width: `${Math.max((1 - (hero.heroInformation?.statFields?.drRank ?? 1) / (hero.heroInformation?.statFields?.heroCount ?? 1)) * 100, 10)}%` }}></div>
                    <div className="absolute inset-0 px-4 flex justify-between items-center text-xs">
                      <span className="font-bold">DAMAGE REDUCTION {hero.heroInformation?.statFields?.damageReduction}</span>
                      {hero.heroInformation?.statFields?.drRank ? (<span>RANK: {hero.heroInformation.statFields.drRank}/{hero.heroInformation.statFields.heroCount}</span>) : (<span>UNRANKED</span>)}
                    </div>
                  </div>
                )}

                {(hero.heroInformation?.statFields?.crit ?? 0) > 0 && (
                  <div className="mb-2 relative h-8 bg-gray-1100">
                    <div className="bg-orange-600 h-8 rounded-sm progress-bar" style={{ width: `${Math.max((1 - (hero.heroInformation?.statFields?.critRank ?? 1) / (hero.heroInformation?.statFields?.heroCount ?? 1)) * 100, 10)}%` }}></div>
                    <div className="absolute inset-0 px-4 flex justify-between items-center text-xs">
                      <span className="font-bold">CRIT {hero.heroInformation?.statFields?.crit}</span>
                      {hero.heroInformation?.statFields?.critRank ? (<span>RANK: {hero.heroInformation.statFields.critRank}/{hero.heroInformation.statFields.heroCount}</span>) : (<span>UNRANKED</span>)}
                    </div>
                  </div>
                )}

                {(hero.heroInformation?.statFields?.heal ?? 0) > 0 && (
                  <div className="mb-2 relative h-8 bg-gray-1100">
                  <div className="bg-teal-500 h-8 rounded-sm progress-bar" style={{ width: `${Math.max((1 - (hero.heroInformation?.statFields?.healRank ?? 1) / (hero.heroInformation?.statFields?.heroCount ?? 1)) * 100, 10)}%` }}></div>
                  <div className="absolute inset-0 px-4 flex justify-between items-center text-xs">
                    <span className="font-bold">HEAL {hero.heroInformation?.statFields?.heal}</span>
                    {hero.heroInformation?.statFields?.healRank ? (<span>RANK: {hero.heroInformation.statFields.healRank}/{hero.heroInformation.statFields.heroCount}</span>) : (<span>UNRANKED</span>)}
                  </div>
                  </div>
                )}
                            
                <div className="flex gap-2 justify-between">
                    <div className="flex items-center w-1/2 bg-red-600 text-white font-medium justify-center text-xs py-2 px-3 rounded-sm">
                    {hero.heroInformation?.statFields?.fireResistance == -30 ? "FIRE" :
                      hero.heroInformation?.statFields?.waterResistance == -30 ? "WATER" :
                      hero.heroInformation?.statFields?.earthResistance == -30 ? "EARTH" :
                      hero.heroInformation?.statFields?.darkResistance == -30 ? "DARK" :
                      hero.heroInformation?.statFields?.lightResistance == -30 ? "LIGHT" :
                      hero.heroInformation?.statFields?.basicResistance == -30 ? "BASIC" : "?"
                    } RESISTANCE -30%
                    </div>
                    <div className="flex items-center w-1/2 bg-green-600 text-white text-xs py-4 px-3 justify-center rounded-sm">
                      {hero.heroInformation?.statFields?.fireResistance === 30 ? "FIRE" :
                        hero.heroInformation?.statFields?.waterResistance === 30 ? "WATER" :
                        hero.heroInformation?.statFields?.earthResistance === 30 ? "EARTH" :
                        hero.heroInformation?.statFields?.darkResistance === 30 ? "DARK" :
                        hero.heroInformation?.statFields?.lightResistance === 30 ? "LIGHT" :
                        hero.heroInformation?.statFields?.basicResistance === 30 ? "BASIC" : "?"
                      } RESISTANCE +30%
                    </div>
                </div>
            </div>
          </div>
          <div className={"w-full h-auto mt-8 lg:mt-0 lg:w-2/3 lg:h-full flex items-center relative justify-center overflow-visible"}>
            {hero.heroInformation?.illustrations?.map((illustration, index) => (
              <FadeInImage
                key={illustration?.name || index}
                src={illustration?.image?.node.sourceUrl ?? ""}
                width={1000}
                height={800}
                maxHeight={true}
                priority={true}
                className="object-contain w-full h-full z-30 lg:-mt-32 overflow-visible"
                quality={100}
                alt={illustration?.name ?? ""}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/4 mb-16 lg:mb-0 h-auto lg:h-full px-4 lg:px-8">
          <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">Evolutions</h2>
          <div className="w-full flex gap-4 mb-16">
            {hero.heroInformation?.evolutionFields?.evolution1 && (
              <div className="flex flex-col gap-2 justify-center items-center">
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution1.node.sourceUrl + ""} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 1" />
                <h3 className={`text-xs font-bold text-center tracking-wider ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>★</h3>
              </div>
            )}
            {hero.heroInformation?.evolutionFields?.evolution2 && (
              <div className="flex flex-col gap-2 justify-center items-center">
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution2.node.sourceUrl + ""} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 2" />
                <h3 className={`text-xs font-bold text-center tracking-wider ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>★★</h3>
              </div>
            )}
            {hero.heroInformation?.evolutionFields?.evolution3 && (
              <div className="flex flex-col gap-2 justify-center items-center">
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution3.node.sourceUrl + ""} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 3" />
                <h3 className={`text-xs font-bold text-center tracking-wider ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>★★★</h3>
              </div>
            )}
            {hero.heroInformation?.evolutionFields?.evolution4 && (
              <div className="flex flex-col gap-2 justify-center items-center">
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution4.node.sourceUrl + ""} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 4" />
                <h3 className={`text-xs font-bold text-center tracking-wider ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>★★★★</h3>
              </div>
            )}
            {hero.heroInformation?.evolutionFields?.evolution5 && (
              <div className="flex flex-col gap-2 justify-center items-center">
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution5.node.sourceUrl + ""} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 5" />
                <h3 className={`text-xs font-bold text-center tracking-wider ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>★★★★★</h3>
              </div>
            )}
          </div>
          <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">Story</h2>
          <div className="w-full h-auto lg:h-[calc(100%-32rem)] lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100">
            <span className="w-full h-auto lg:h-full lg:overflow-y-scroll text-xs 3xl:text-sm" dangerouslySetInnerHTML={{ __html: hero?.heroInformation?.bioFields?.story + "" }}></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;
