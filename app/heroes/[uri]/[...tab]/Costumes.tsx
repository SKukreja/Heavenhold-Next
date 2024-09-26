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
      <div id="Costumes" className="relative overflow-visible z-20 pt-8 lg:pt-0 w-full h-[calc(100vhrem)] items-start flex flex-col text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg px-8">
        <div className="w-full justify-start h-[calc(100%-8rem)]">
          <div className="w-full h-auto lg:h-full lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100 scrollbar-w-2">
            <div className="w-full h-auto lg:h-full lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100 scrollbar-w-2 flex mb-8 gap-8 flex-wrap">                          
              {(hero.heroInformation?.costumes?.edges?.length ?? 0) > 0 && hero.heroInformation?.costumes?.edges.map((costumeNode) => {                
                const costume = costumeNode.node as unknown as Item;                
                return (
                  <div key={costume.id} className="w-[calc(50%-1.5rem)] lg:w-[calc(20%-1.5rem)] aspect-square mb-16 relative inline-block">
                    <FadeInImage className="pb-4 w-full h-auto object-cover absolute inset-0" src={costume.featuredImage?.node.sourceUrl ?? ""} alt={costume.title + ""} width={500} height={500} />                  
                    <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald absolute drop-shadow-2xl w-full text-center top-[calc(100%+1rem)]">{costume.title + ""}</h2>
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
