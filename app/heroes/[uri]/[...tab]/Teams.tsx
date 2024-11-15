"use client";

import React, { useState, useEffect } from "react";
import { Hero, Team, Item } from "#/graphql/generated/types";
import Link from "next/link";
import CategoriesHeader from "#/app/components/CategoriesHeader";
import { usePathname } from "next/navigation";
import TeamsList from "#/app/components/RenderTeamsList";

interface TeamsProps {
  hero: Hero;
  teams: Team[];
  heroes: Hero[];
  items: Item[];
}

function Teams({ hero, teams, heroes, items }: TeamsProps) {  
   const [activeCategory, setActiveCategory] = useState("");
   const pathname = usePathname();

  useEffect(() => {    
    const splitUri = pathname.split("/")
    if(splitUri.length > 4 && splitUri[3].toLowerCase() === "teams") {
      setActiveCategory(splitUri[4]);
    }
  }, [pathname])

  return (
    <div
      id="Teams"
      className="relative overflow-visible z-20 w-full h-auto items-start flex px-0 lg:px-8"
    >
      <div className="px-0 w-full flex-col justify-start h-full flex">
        <div className={"w-full h-16 flex justify-between pr-8 lg:px-0 items-end mb-8"}>
          <CategoriesHeader currentLocation={`/heroes/${hero.slug}/teams`} />
          <Link
            className="text-lg lg:text-xl text-gray-400 font-bold bg-transparent lg:bg-gray-900 lg:hover:bg-gray-800 hover:text-white px-0 py-0 lg:px-8 lg:py-4 flex justify-center items-center"
            href={`https://api.heavenhold.com/wp-admin/post-new.php?post_type=teams`}
          >
            + Submit Team
          </Link>
        </div>
        <div className="w-full h-full mb-4">
          {/* {filteredTeams.length == 0 && (
            <div className="flex flex-col w-full h-[calc(50vh)] justify-center items-center">
              <span>No {activeFilter == "" ? "" : activeFilter.replace("-"," ") + " "}teams found for {hero.title}.</span>
              <Link
                className="text-xl text-gray-400 font-bold hover:text-white px-8 py-4 flex justify-center items-center"
                href={`https://api.heavenhold.com/wp-admin/post-new.php?post_type=teams`}
              >
                Add a new team
              </Link>
            </div>
          )} */}
          <TeamsList hero={hero} activeCategory={activeCategory} />
        </div>
      </div>
    </div>
  );
}

export default Teams;
