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
        <div className="px-8 w-1/4 flex-col justify-start h-[calc(100%-8rem)] flex">
          <div className="w-full h-auto whitespace-nowrap">
            <h2 className="text-2xl font-medium uppercase tracking-widest mb-3">{hero.title.replace(hero.heroInformation.bioFields.name, '').trim()}</h2>
            <h1 className="text-8xl font-extrabold font-oswald -ml-1 tracking-wide mb-6">{hero.heroInformation.bioFields.name}</h1>
            <div className={`flex gap-4 align-middle `}>
              {hero.heroInformation.bioFields.element && (
                <FadeInImage src={`/icons/${hero.heroInformation.bioFields.element.toLowerCase()}.webp`} className="flex flex-col justify-center h-full object-contain" width={30} height={30} alt={hero.heroInformation.bioFields.element} />
              )}
              {hero.heroInformation.bioFields.role && (
                <FadeInImage src={`/icons/${hero.heroInformation.bioFields.role.toLowerCase()}.webp`} className="flex flex-col justify-center h-full object-contain" width={30} height={30} alt={hero.heroInformation.bioFields.role} />
              )}
              <span className={`text-2xl mb-1 tracking-widest h-full flex flex-col justify-center ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>{rarity === 'r-3-star' && '★★★'}{rarity === 'r-2-star' && '★★'}{rarity === 'r-1-star' && '★'}</span>
            </div>
          </div>
        </div>
        <div className={"w-2/4 h-full flex items-center relative justify-center"}>
          <FadeInImage src={hero.heroInformation.illustration?.node.sourceUrl ?? ""} width={1000} height={800} maxHeight={true} priority={true} className="object-contain w-full h-full -mt-16" quality={100} alt={hero.heroInformation.illustration?.node.title ?? ""} />
        </div>
        <div className="w-1/4 h-full px-8">
          <h2 className="mb-6 text-4xl font-medium font-oswald">Evolutions</h2>
          <div className="w-full flex gap-4 mb-16">
            {hero.heroInformation.evolutionFields.evolution1 && (
              <div className="flex flex-col gap-2 justify-center items-center">
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution1.node.sourceUrl} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 1" />
                <h3 className={`text-xs font-bold text-center tracking-wider ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>★</h3>
              </div>
            )}
            {hero.heroInformation.evolutionFields.evolution2 && (
              <div className="flex flex-col gap-2 justify-center items-center">
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution2.node.sourceUrl} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 2" />
                <h3 className={`text-xs font-bold text-center tracking-wider ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>★★</h3>
              </div>
            )}
            {hero.heroInformation.evolutionFields.evolution3 && (
              <div className="flex flex-col gap-2 justify-center items-center">
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution3.node.sourceUrl} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 3" />
                <h3 className={`text-xs font-bold text-center tracking-wider ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>★★★</h3>
              </div>
            )}
            {hero.heroInformation.evolutionFields.evolution4 && (
              <div className="flex flex-col gap-2 justify-center items-center">
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution4.node.sourceUrl} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 4" />
                <h3 className={`text-xs font-bold text-center tracking-wider ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>★★★★</h3>
              </div>
            )}
            {hero.heroInformation.evolutionFields.evolution5 && (
              <div className="flex flex-col gap-2 justify-center items-center">
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution5.node.sourceUrl} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 5" />
                <h3 className={`text-xs font-bold text-center tracking-wider ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} ${rarity === 'r-2-star' ? 'text-gray-300' : ''} ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>★★★★★</h3>
              </div>
            )}
          </div>
          <h2 className="mb-6 text-4xl font-medium font-oswald">Story</h2>
          <div className="w-full h-[calc(100%-32rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100">
            <span className="w-full h-full overflow-y-scroll text-sm" dangerouslySetInnerHTML={{ __html: hero.heroInformation.bioFields.story }}></span>
          </div>
        </div>
      </div>
    )
}

export default Abilities;
