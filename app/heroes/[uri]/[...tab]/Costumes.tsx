"use client";

import { Item, Hero } from "#/graphql/generated/types";
import FadeInImage from "#/app/components/FadeInImage";
import Link from "next/link";
import ItemCostumeCard from "#/app/components/ItemCostumeCard";

interface CostumeProps {
  hero: Hero;
  items: Item[];
}

function Costumes({ hero, items }: CostumeProps) {
    if (!hero || !items) return null;

    const heroCostumes = items
      .filter(i => (i as Item)?.itemInformation?.itemType?.nodes[0].name?.toString().toLowerCase().replace(' ', '-') === 'costume' && (i as Item)?.costume?.hero?.nodes[0].id === hero.id)
      .sort((a, b) => {
        const titleA = (a as Item)?.title ?? '';
        const titleB = (b as Item)?.title ?? '';
        return titleA.localeCompare(titleB);
      });

    return (
      <div id="Costumes" className="relative overflow-visible z-20 pt-8 mt-8 lg:pt-0 w-full h-[calc(100vhrem)] items-start flex flex-col text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg px-8">
        <div className="w-full justify-start h-[calc(100%-8rem)]">
          <div className="w-full h-auto lg:h-full lg:overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100 scrollbar-w-2">
            <div className="w-[calc(100%+2rem)] h-auto lg:h-full p-[2px] lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100 scrollbar-w-2 flex mb-8 gap-8 flex-wrap">                          
              {(heroCostumes.length ?? 0) > 0 && heroCostumes.map((item, index) => {                 
                return (                  
                  <Link
                    key={item.id}
                    href={item.uri ?? '/'}                    
                    className={`
                    relative w-[calc(100%-2rem-4px)] lg:w-[calc((100%/2)-2rem)-(2px/2)] xl:w-[calc((100%/3)-2rem-(2px/3))] 3xl:w-[calc((100%/4)-2rem-(2px/4))] 4xl:w-[calc((100%/6)-2rem-(2px/6))] flex cursor-pointer bg-[#22262f]
                    align-middle transition-all duration-200 after:transition-all 
                    after:linear after:duration-200 ease grayscale-[30%] 
                    hover:after:outline-offset-[-5px] hover:grayscale-0 
                    after:w-full after:h-full after:absolute after:inset-0 after:z-20 after:pointer-events-none after:border after:border-gray-800 after:outline after:outline-2 
                    p-8`}
                  >
                    {<ItemCostumeCard item={item} element={""} index={index} />}     
                  </Link>
                )
              })}
            </div>  
          </div>
        </div>        
      </div>
    )
}

export default Costumes;
