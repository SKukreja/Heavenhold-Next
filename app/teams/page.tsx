"use client";

import { useMemo } from "react";
import Loading from "#/app/components/loading";
import { Hero, Item, Team } from "#/graphql/generated/types";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import { useUser } from '#/app/components/UserContext';
import { useItems } from "../components/GetItemsProvider";
import { useTeams } from "../components/GetTeamsProvider";
import TeamsList from "../components/RenderTeamsList";

export default function Page() {
    const { data: heroesData } = useHeroes();
    const { data: itemsData } = useItems();
    const { data: teamsData } = useTeams();
    const heroes = heroesData?.heroes?.nodes ?? [] as Hero[];
    const items = itemsData?.items?.nodes ?? [] as Item[];
    const teams = teamsData?.teams?.nodes ?? [] as Team[];

    if (!heroesData || !itemsData || !teamsData) {
        return <Loading />;
    }

    return (
        <div
        id="TeamsListPage"      
        >        
            <TeamsList teams={teams as Team[]} heroes={heroes as Hero[]} items={items as Item[]} />
        </div>    
    );
}
