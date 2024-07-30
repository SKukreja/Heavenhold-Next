"use client";

import { Hero } from "#/types";
import { useState, useEffect } from "react";
import FadeInImage from "#/app/components/FadeInImage";
import { formatDate } from "#/ui/helpers";
import StatFormatter from "#/app/components/StatFormatter";
import { normal, special, chain } from "#/ui/icons";

interface BuildProps {
  hero: Hero;
}

function Build({ hero }: BuildProps) {
    const [selectedWeapon, setSelectedWeapon] = useState(0);
    const rarity = `r-${hero.heroInformation.bioFields.rarity.toString().replace(/ /g, "-").toLowerCase()}`;

    const handleWeaponClick = (index: number) => {
      setSelectedWeapon(index);
    };

    return (
      <div id="Bio" className="relative overflow-visible z-10 w-full h-[calc(100vhrem)] items-start flex flex-col text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg px-4 3xl:px-8">
        <div className="px-4 3xl:px-8 w-full justify-start h-[calc(100%-8rem)] flex">
          <div className="w-1/2 h-full">
            <h2 className="text-xl h-[calc(4rem)] 3xl:text-2xl font-medium uppercase tracking-widest mb-16">{hero.title.replace(hero.heroInformation.bioFields.name, '').trim()} {hero.heroInformation.bioFields.name} / Build</h2>            
            
            <div className="w-full flex gap-8 flex-wrap">
             
            
              <div className="w-1/4 mb-16">
  
              </div>
            </div>
          </div>    
        </div>    
      </div>
    )
}

export default Build;
