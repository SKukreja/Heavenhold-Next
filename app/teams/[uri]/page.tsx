"use client";

import Loading from "#/app/components/loading";
import { Hero, Item, Team } from "#/graphql/generated/types";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import { useItems } from "#/app/components/GetItemsProvider";
import { useTeams } from "#/app/components/GetTeamsProvider";
import TeamsList from "#/app/components/RenderTeamsList";

interface TeamListProps {
    params: Promise<{
        uri: string;
    }>;
}

export default async function Page({ params }: TeamListProps) {
    const activeCategory = (await params).uri.toString().toLowerCase();

    return (
        <div
        id="TeamsListPage"      
        >        
            <TeamsList activeCategory={activeCategory} />
        </div>    
    );
}
