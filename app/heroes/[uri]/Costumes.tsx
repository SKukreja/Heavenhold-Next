"use client";

import { Hero } from "#/types";
import { useState, useEffect } from "react";
import FadeInImage from "#/app/components/FadeInImage";
import { formatDate } from "#/ui/helpers";
import StatFormatter from "#/app/components/StatFormatter";
import { normal, special, chain } from "#/ui/icons";

interface CostumeProps {
  hero: Hero;
}

function Costumes({ hero }: CostumeProps) {
    const [selectedWeapon, setSelectedWeapon] = useState(0);
    const rarity = `r-${hero.heroInformation.bioFields.rarity.toString().replace(/ /g, "-").toLowerCase()}`;

    const handleWeaponClick = (index: number) => {
      setSelectedWeapon(index);
    };

    return (
      <div id="Bio" className="relative overflow-visible z-10 w-full h-[calc(100vhrem)] items-start flex flex-col text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg px-4 3xl:px-8">
        <div className="px-4 3xl:px-8 w-full justify-start h-[calc(100%-8rem)] flex">
          <div className="w-full h-full">
            <h2 className="text-xl h-[calc(4rem)] 3xl:text-2xl font-medium uppercase tracking-widest mb-16">{hero.title.replace(hero.heroInformation.bioFields.name, '').trim()} {hero.heroInformation.bioFields.name} / Costumes</h2>            
            
            <div className="w-full h-full flex gap-8 flex-wrap overflow-y-auto">
              {hero.heroInformation.costumes.edges.map((costume, index) => (
                <div className="w-96 h-96 mb-16 relative">
                  <FadeInImage className="pb-4 w-full h-auto object-cover absolute inset-0" src={costume.node.featuredImage.node.sourceUrl ?? ""} alt={costume.node.title} width={500} height={500} />                  
                  <h2 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald absolute drop-shadow-2xl w-full text-center -bottom-2">{costume.node.title}</h2>
                </div>   
              ))}                              
            </div>  
          </div>
        </div>        
      </div>
    )
}

export default Costumes;
