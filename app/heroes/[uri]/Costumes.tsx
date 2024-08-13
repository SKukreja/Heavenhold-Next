"use client";

import { Item, Hero } from "#/graphql/generated/types";
import { useState, useEffect } from "react";
import FadeInImage from "#/app/components/FadeInImage";
import { formatDate } from "#/ui/helpers";
import StatFormatter from "#/app/components/StatFormatter";
import { normal, special, chain } from "#/ui/icons";

interface CostumeProps {
  hero: Hero;
}

function Costumes({ hero }: CostumeProps) {
    return (
      <div id="Bio" className="relative overflow-visible z-10 w-full h-[calc(100vhrem)] items-start flex flex-col text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg px-4 3xl:px-8">
        <div className="px-4 3xl:px-8 w-full justify-start h-[calc(100%-8rem)] flex">
          <div className="w-full h-full overflow-y-auto">
            <h2 className="text-xl h-[calc(4rem)] 3xl:text-2xl font-medium uppercase tracking-widest mb-16">{hero.title && hero.heroInformation?.bioFields?.name ? hero.title.replace(hero.heroInformation?.bioFields?.name, '').trim() : ''} {hero.heroInformation?.bioFields?.name} / Costumes</h2>            
            <div className="w-full h-full overflow-y-auto flex gap-8 flex-wrap">                          
              {(hero.heroInformation?.costumes?.edges?.length ?? 0) > 0 && hero.heroInformation?.costumes?.edges.map((costumeNode) => {
                const costume = costumeNode as unknown as Item;
                return (
                  <div key={costume.id} className="w-96 h-96 mb-16 relative inline-block">
                    <FadeInImage className="pb-4 w-full h-auto object-cover absolute inset-0" src={costume.featuredImage?.node.sourceUrl + ""} alt={costume.title + ""} width={500} height={500} />                  
                    <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald absolute drop-shadow-2xl w-full text-center -bottom-2">{costume.title + ""}</h2>
                  </div>
                )
              })}
            </div>  
          </div>
        </div>        
      </div>
    )
}

export default Costumes;
