"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Hero, Team, Item, GetUserTeamVoteStatusDocument } from "#/graphql/generated/types";
import FadeInImage from "#/app/components/FadeInImage";
import { upvote, downvote, chevron, crown } from "#/ui/icons";
import Link from "next/link";
import {
  useDownvoteTeamMutation,
  useUpvoteTeamMutation,
  useGetUserTeamVoteStatusSuspenseQuery
} from "#/graphql/generated/types";
import { equipmentIcons } from "#/ui/icons";
import Loading from "#/app/components/loading";
import StatFormatter from "#/app/components/StatFormatter";
import { getIpAddress } from "#/ui/helpers";
import { useUser } from '#/app/components/UserContext';
import { useTeams } from "./GetTeamsProvider";
import { useHeroes } from "./GetHeroesProvider";
import { useItems } from "./GetItemsProvider";

interface TeamsListProps {
    hero?: Hero;
    item?: Item;
    activeCategory?: string;
}

export default function TeamsList({hero, item, activeCategory}: TeamsListProps) {
    const ipAddress = getIpAddress();
    const { votes } = useTeams();
    const { user } = useUser();
    const [upvoteTeam] = useUpvoteTeamMutation();
    const [downvoteTeam] = useDownvoteTeamMutation();
    const { data: voteData } = useGetUserTeamVoteStatusSuspenseQuery({ variables: { userId: user?.user_id ?? 0 as number, ipAddress: ipAddress.toString() } });
    const { data: heroesData } = useHeroes();
    const { data: itemsData } = useItems();
    const { data: teamsData } = useTeams();
    const heroes = heroesData?.heroes?.nodes ?? [] as Hero[];
    const items = itemsData?.items?.nodes ?? [] as Item[];
    const teams = teamsData?.teams?.nodes ?? [] as Team[];
    const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);

    const teamsWithVotes = filteredTeams
      .map((team) => {
        const vote = votes?.getTeamVotes?.find((v) => v?.teamId === team.databaseId);
        return {
          ...team,
          votes: (vote?.upvoteCount ?? 0) - (vote?.downvoteCount ?? 0),
          userVote:
            voteData?.getUserTeamVoteStatus?.find(
              (userVote) => userVote?.teamId === team.databaseId
            )?.userVote ?? null,
        };
      })
      .sort((a, b) => b.votes - a.votes);

    const teamsWithoutVotes = filteredTeams
        .filter(
        (team) =>
            !votes?.getTeamVotes?.some(
            (vote) => vote?.teamId === team.databaseId
            )
        )
        .map((team) => ({ ...team, votes: 0, userVote: null }));

    const [combinedTeams, setCombinedTeams] = useState<
        (Team & { votes: number; userVote: string | null })[]
    >([
        ...((teamsWithVotes ?? []) as (Team & {
        votes: number;
        userVote: string | null;
        })[]),
        ...((teamsWithoutVotes ?? []) as (Team & {
        votes: number;
        userVote: string | null;
        })[]),
    ]);

    useEffect(() => {
        if (!teams) return;
        if (activeCategory && hero) {
            setFilteredTeams(teams.filter(team => team.teamFields?.teamType?.toLowerCase() === activeCategory).filter(team => team.teamFields?.composition?.some(
                (slot) => slot?.hero?.nodes[0].id === hero.id
            )) as Team[]);
        }
        else if (activeCategory && item) {
            setFilteredTeams(teams.filter(team => team.teamFields?.teamType?.toLowerCase() === activeCategory).filter(team => team.teamFields?.composition?.some(
                (slot) => 
                slot?.weapon?.nodes[0].id === item.id || 
                slot?.merch?.nodes[0].id === item.id || 
                slot?.relic?.nodes[0].id === item.id ||
                slot?.accessory?.nodes[0].id === item.id ||
                slot?.shield?.nodes[0].id === item.id         
            )) as Team[]);
        }
        else if (activeCategory) {
            setFilteredTeams(teams.filter(team => team.teamFields?.teamType?.toLowerCase() === activeCategory) as Team[]);
        }
        else if (hero) {
            setFilteredTeams(teams?.filter(team => team.teamFields?.composition?.some(
                (slot) => slot?.hero?.nodes[0].id === hero.id
            )) as Team[]);
        }
        else if (item) {
            setFilteredTeams(teams.filter(team => team.teamFields?.composition?.some(
                (slot) => 
                slot?.weapon?.nodes[0].id === item.id || 
                slot?.merch?.nodes[0].id === item.id || 
                slot?.relic?.nodes[0].id === item.id ||
                slot?.accessory?.nodes[0].id === item.id ||
                slot?.shield?.nodes[0].id === item.id         
            )) as Team[]);
        }
        else {
            setFilteredTeams(teams as Team[]);
        }

        if (!voteData) return;
    
        const teamsWithVotes = filteredTeams
          .map((team) => {
            const vote = votes?.getTeamVotes?.find((v) => v?.teamId === team.databaseId);
            return {
              ...team,
              votes: (vote?.upvoteCount ?? 0) - (vote?.downvoteCount ?? 0),
              userVote:
                voteData?.getUserTeamVoteStatus?.find(
                  (userVote) => userVote?.teamId === team.databaseId
                )?.userVote ?? null,
            };
          })
          .sort((a, b) => b.votes - a.votes);

        const teamsWithoutVotes = filteredTeams
            .filter(
            (team) =>
                !votes?.getTeamVotes?.some(
                (vote) => vote?.teamId === team.databaseId
                )
            )
            .map((team) => ({ ...team, votes: 0, userVote: null }));
    
        setCombinedTeams([
            ...((teamsWithVotes ?? []) as (Team & {
            votes: number;
            userVote: string | null;
            })[]),
            ...((teamsWithoutVotes ?? []) as (Team & {
            votes: number;
            userVote: string | null;
            })[]),
        ]);      
    }, [activeCategory, hero, item, teams, filteredTeams]);

    const handleUpvote = async (
        teamId: number,
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.stopPropagation();
        try {
            const userIpAddress = await getIpAddress();
            const { data } = await upvoteTeam({
                variables: {
                    teamId,
                    userId: user?.user_id as number ?? 0,
                    ipAddress: userIpAddress,
                },
            });
            if (data?.upvoteTeam?.success) {
            setCombinedTeams((prevTeams) =>
                prevTeams
                .map((team) => {
                    if (team.databaseId === teamId) {
                    // Calculate the adjustment based on the previous vote
                    let likeAdjustment = 1;
                    if ("userVote" in team && team.userVote === "downvote") {
                        likeAdjustment = 2;
                    }
                    return {
                        ...team,
                        userVote: "upvote",
                        votes: team.votes + likeAdjustment,
                    };
                    }
                    return team;
                })
                .sort((a, b) => b.votes - a.votes)
            );
            }
        } catch (error) {
            console.error("Error handling upvote:", error);
        }
        };

    const handleDownvote = async (
        teamId: number,
        event: React.MouseEvent<HTMLButtonElement>
        ) => {
        event.stopPropagation();
        try {
            const userIpAddress = await getIpAddress();
            const { data } = await downvoteTeam({
            variables: {
                teamId,
                userId: user?.user_id as number ?? 0,
                ipAddress: userIpAddress,
            },
            });
            if (data?.downvoteTeam?.success) {
            setCombinedTeams((prevTeams) =>
                prevTeams
                .map((team) => {
                    if (team.databaseId === teamId) {
                    // Calculate the adjustment based on the previous vote
                    let dislikeAdjustment = 1;
                    if ("userVote" in team && team.userVote === "upvote") {
                        dislikeAdjustment = 2;
                    }
                    return {
                        ...team,
                        userVote: "downvote",
                        votes: team.votes - dislikeAdjustment,
                    };
                    }
                    return team;
                })
                .sort((a, b) => b.votes - a.votes)
            );
            }
        } catch (error) {
            console.error("Error handling downvote:", error);
        }
        };

    const toggleTeamDetails = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        // Check that the event target is not a button to prevent toggling when clicking on upvote/downvote buttons
        if (
            !(event.target instanceof HTMLButtonElement) &&
            !(event.target instanceof SVGElement)
        ) {
            const teamElement = event.currentTarget.nextElementSibling;
            if (teamElement) {
            teamElement.classList.toggle("hidden");
            teamElement.classList.toggle("flex");
            const chevronIcon = event.currentTarget.querySelector(".chevron-icon");
            if (chevronIcon) {
                chevronIcon.classList.toggle("-rotate-90");
            }
            }
        }
    };

    if (!heroesData || !itemsData || !teamsData) {
        return <Loading />;
    }

    return (
    <Suspense fallback={<Loading />}>
      {combinedTeams.length > 0 ? combinedTeams.map((team: Team & {
        votes: number;
        userVote: string | null;
        }) => {
        const teamSlug = team?.slug ?? "";
        const combinedPartyBuff: { [statName: string]: number } = {};

        // Iterate over each hero in the team
        team.teamFields?.composition?.forEach((slot) => {
        const heroId = slot?.hero?.nodes[0].id;
        const heroData = heroes.find((h) => h.id === heroId);

        if (!heroData) {
            return; // Skip if hero data not found
        }

        const partyBuff = heroData?.heroInformation?.abilityFields?.partyBuff;

        // Extract the party buffs
        partyBuff?.forEach((buff: any) => {
            const statName = buff?.stat;
            const statValue = buff?.value;
            if (statName && statValue) {
            if (combinedPartyBuff[statName]) {
                combinedPartyBuff[statName] += statValue;
            } else {
                combinedPartyBuff[statName] = statValue;
            }
            }
        });
        });

        // Convert combinedPartyBuff to an array
        const combinedPartyBuffArray = Object.entries(combinedPartyBuff).map(
        ([stat, value]) => ({ stat, value })
        );

        return (
        <div
            key={teamSlug + team.id}
            className={`team-box t-${team?.teamFields?.teamType?.toLowerCase()} text-white bg-gray-transparent w-full mb-4`}
        >
            <div
            className="team-header cursor-pointer flex items-center justify-between px-8 py-4"
            onClick={toggleTeamDetails}
            >
            <div className="w-0 lg:w-12 h-full flex mr-6 lg:mr-4">
                <div className="flex justify-between items-center gap-2 lg:gap-4 flex-1">
                <div className="votes flex flex-col justify-between items-center gap-2">
                    <button
                    className="w-4 h-4 flex justify-center items-center fill-white z-20 disabled:fill-orange-300"
                    onClick={(e) =>
                        handleUpvote(
                        team?.databaseId ?? 0,
                        e
                        )
                    }
                    disabled={
                        team &&
                        "userVote" in team &&
                        team.userVote === "upvote"
                    }
                    >
                    {upvote()}
                    </button>
                    <div className="text-lg flex justify-center items-center font-oswald">
                    {team.votes}
                    </div>
                    <button
                    className="w-4 h-4 flex justify-center items-center fill-white z-20 disabled:fill-blue-300"
                    onClick={(e) =>
                        handleDownvote(
                        team?.databaseId ?? 0,
                        e
                        )
                    }
                    disabled={
                        team &&
                        "userVote" in team &&
                        team.userVote === "downvote"
                    }
                    >
                    {downvote()}
                    </button>
                </div>
                </div>
            </div>
            <div className="flex-col lg:flex-row flex items-center justify-between w-4/5">
                <div className="text-sm lg:text-lg flex flex-col font-bold w-full mb-4 lg:w-1/2 lg:mb-0">
                <span
                    className={`text-xs tracking-wide ${
                    team?.teamFields?.teamType === "Colosseum"
                        ? "text-fire"
                        : team?.teamFields?.teamType === "Raid"
                        ? "text-water"
                        : "text-earth"
                    }`}
                >
                    {team?.teamFields?.teamType ?? ""}
                </span>
                <span>{team?.title ?? ""}</span>
                </div>
                <div className="flex justify-center items-center gap-2 lg:gap-4 w-full lg:w-1/2">
                {team.teamFields?.composition?.map((slot, index) => {
                    const heroId = slot?.hero?.nodes[0].id;
                    const heroData = heroes.find((h) => h.id === heroId);
                    const element =
                    heroData?.heroInformation?.bioFields?.element?.toLowerCase();
                    return (
                    <div
                        key={`${team.id}-${index + 1}`}
                        id={`${team.id}-${index + 1}`}
                        data-build={teamSlug}
                        className={`team-hero w-full e-${element} relative`}
                    >
                        <FadeInImage
                        src={
                            heroData?.heroInformation?.thumbnail?.node
                            .sourceUrl
                            ? heroData?.heroInformation?.thumbnail?.node
                                .sourceUrl
                            : "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
                        }
                        className={`w-full h-auto aspect-square object-cover bg-gradient-to-b border-b-4 ${
                            heroData?.heroInformation?.bioFields?.rarity?.toString() ===
                            "3 Star"
                            ? `from-yellow-700 to-yellow-500 border-b-4 border-yellow-500`
                            : heroData?.heroInformation?.bioFields?.rarity?.toString() ===
                                "2 Star"
                            ? `from-gray-600 to-gray-400 border-b-4 border-gray-400`
                            : `from-brown-700 to-brown-500 border-b-4 border-brown-500`
                        }`}
                        width={300}
                        height={300}
                        alt={hero?.title + ""}
                        />
                        {index === 0 &&
                        team?.teamFields?.teamType !== "Arena" && (
                            <span className="absolute -top-2 -left-2 w-4 h-4 lg:w-8 lg:h-16 xl:h-12 2xl:h-8 drop-shadow-md lead fill-white">
                            {crown()}
                            </span>
                        )}
                    </div>
                    );
                })}
                </div>
            </div>
            <span className="chevron-icon duration-200 origin-center ease-in-out ml-6 lg:ml-8 flex items-center justify-center fill-white h-2 w-2 lg:h-4 lg:w-4">
                {chevron()}
            </span>
            </div>
            <div
            className="team-details hidden px-8 py-4 w-full text-2xs lg:text-xs justify-between"
            >
            <div className="h-24 flex w-4 lg:w-12 mr-6 lg:mr-4"></div>
            <div className="flex-col-reverse lg:flex-row flex w-4/5">
                <div className="team-explanation flex-1 flex flex-col gap-4 pr-0 lg:pr-32 w-full lg:w-[calc(50%-3rem)]">
                {team?.teamFields?.notes ?? ""}
                {combinedPartyBuffArray.length > 0 && (
                    <div className="team-party-buffs mt-4">
                    <h2 className="mb-2 text-lg font-medium font-oswald">Team Passives</h2>
                    <div className="w-full h-auto">
                        {combinedPartyBuffArray.map((passive) => (
                        <StatFormatter
                            key={passive.stat}
                            statName={passive.stat}
                            statValue={passive.value.toString()}
                            isPassive={true}
                            affectsParty={true}
                        />
                        ))}
                    </div>
                    </div>
                )}
                </div>
                <div className="team-build flex items-start justify-start gap-2 lg:gap-4 -ml-[calc(3rem)] w-[calc(100%+3rem)] lg:w-[calc(50%+3rem)]">
                <div className="w-32 h-full flex flex-col justify-start items-center gap-4">
                    <div className="w-8 h-16 xl:h-12 2xl:h-8"></div>
                    <div className="w-8 h-16 xl:h-12 2xl:h-12 flex justify-center items-center text-center pr-4"><FadeInImage className={"w-4 h-auto"} src={equipmentIcons["One-Handed Sword"]} width={12} height={12} alt={"Weapon icon"} /></div>
                    <div className="w-8 h-16 xl:h-12 2xl:h-12 flex justify-center items-center text-center pr-4"><FadeInImage className={"w-4 h-auto"} src={equipmentIcons["Shield"]} width={12} height={12} alt={"Shield icon"} /></div>
                    <div className="w-8 h-16 xl:h-12 2xl:h-12 flex justify-center items-center text-center pr-4"><FadeInImage className={"w-4 h-auto"} src={equipmentIcons["Accessory"]} width={12} height={12} alt={"Accessory icon"} /></div>
                    <div className="w-8 h-16 xl:h-12 2xl:h-12 flex justify-center items-center text-center pr-4"><FadeInImage className={"w-4 h-auto"} src={equipmentIcons["Merch"]} width={12} height={12} alt={"Merch icon"} /></div>
                    <div className="w-8 h-16 xl:h-12 2xl:h-12 flex justify-center items-center text-center pr-4"><FadeInImage className={"w-4 h-auto"} src={equipmentIcons["Relic"]} width={12} height={12} alt={"Relic icon"} /></div>
                    <div className="w-8 h-16 xl:h-12 2xl:h-12 flex justify-center items-center text-center pr-4"><FadeInImage className={"w-4 h-auto pl-[calc(0.1rem)] pr-[calc(0.1rem)]"} src={equipmentIcons["Cards"]} width={12} height={12} alt={"Card icon"} /></div>
                </div>
                {team.teamFields?.composition?.map(
                    (slot: any, index: number) => {
                    const heroId = slot?.hero?.nodes[0].id;
                    const heroData = heroes.find((h) => h.id === heroId);
                    const element =
                        heroData?.heroInformation?.bioFields?.element?.toLowerCase();
                    const weapon = items.find(
                        (item) => item.id === slot?.weapon?.nodes[0].id
                    );
                    const shield = items.find(
                        (item) => item.id === slot?.shield?.nodes[0].id
                    );
                    const accessory = items.find(
                        (item) => item.id === slot?.accessory?.nodes[0].id
                    );
                    const merch = items.find(
                        (item) => item.id === slot?.merch?.nodes[0].id
                    );
                    const relic = items.find(
                        (item) => item.id === slot?.relic?.nodes[0].id
                    );
                    const cards = items.find(
                        (cards) => cards.id === slot?.cards?.nodes[0].id
                    );

                    return (
                        <div
                        key={`${teamSlug}-build-${index + 1}`}
                        className="hero-build-section w-full mb-8 lg:mb-0"
                        >
                        <div className={`team-hero-build e-${element}`}>
                            <div className="text-center mb-4 h-16 xl:h-12 2xl:h-8 font-bold flex items-start justify-center">
                            <Link href={`${heroData?.uri}`} className="ml-auto mr-auto w-full">
                                {heroData?.title}
                            </Link>
                            </div>
                        </div>
                        <div className="build-items">
                            <div className="build-object build-weapon">
                            <div className="build flex flex-col gap-4 text-2xs">                                  
                                <Link href={`${weapon?.uri}`} className={`flex items-center gap-1 lg:gap-2 h-16 xl:h-12 2xl:h-12 ${weapon ? "" : "pointer-events-none text-gray-500"}`}>
                                <FadeInImage src={weapon?.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} width={20} height={20} className={`${weapon ? "" : "invisible"} hidden xl:flex`} alt={weapon?.title + " Icon"} /> 
                                <span className="w-full">{weapon ? weapon?.title : "N/A"}</span>
                                </Link>
                                <Link href={`${shield?.uri}`} className={`flex items-center gap-1 lg:gap-2 h-16 xl:h-12 2xl:h-12 ${shield ? "" : "pointer-events-none text-gray-500"}`}>
                                <FadeInImage src={shield?.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} width={20} height={20} className={`${shield ? "" : "invisible"} hidden xl:flex`} alt={shield?.title + " Icon"} />
                                <span className="w-full">{shield ? shield?.title : "N/A"}</span>
                                </Link>
                                <Link href={`${accessory?.uri}`} className={`flex items-center gap-1 lg:gap-2 h-16 xl:h-12 2xl:h-12 ${accessory ? "" : "pointer-events-none text-gray-500"}`}>
                                <FadeInImage src={accessory?.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} width={20} height={20} className={`${accessory ? "" : "invisible"} hidden xl:flex`} alt={accessory?.title + " Icon"} />
                                <span className="w-full">{accessory ? accessory?.title : "N/A"}</span>
                                </Link>
                                <Link href={`${merch?.uri}`} className={`flex items-center gap-1 lg:gap-2 h-16 xl:h-12 2xl:h-12 ${merch ? "" : "pointer-events-none text-gray-500"}`}>
                                <FadeInImage src={merch?.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} width={20} height={20} className={`h-full aspect-square justify-center items-center hidden xl:flex ${merch ? "" : "invisible"}`} alt={merch?.title + " Icon"} />
                                <span className="w-full">{merch ? merch?.title : "N/A"}</span>
                                </Link>
                                <Link href={`${relic?.uri}`} className={`flex items-center gap-1 lg:gap-2 h-16 xl:h-12 2xl:h-12 ${relic ? "" : "pointer-events-none text-gray-500"}`}>
                                <FadeInImage src={relic?.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} width={20} height={20} className={`${relic ? "" : "invisible"} hidden xl:flex`} alt={relic?.title + " Icon"} />
                                <span className="w-full">{relic ? relic?.title : "N/A"}</span>
                                </Link>
                                <Link href={`#`} className="flex items-center gap-1 lg:gap-2 h-16 xl:h-12 2xl:h-12">
                                <span className="w-0 lg:w-6"></span>
                                <span className="w-full">{cards?.title}</span>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    );
                    }
                )}
                </div>
            </div>
            <span className="ml-6 lg:ml-8 h-4 w-4"></span>
            </div>
        </div>
        );
    }) : (
            <div className="flex flex-col w-full h-[calc(50vh)] justify-center items-center">
                <span>No teams found{(item ? ' with ' + item?.title : hero ? ' for ' + hero?.title : '')}.</span>
                <Link
                    className="text-xl text-gray-400 font-bold hover:text-white px-8 py-4 flex justify-center items-center"
                    href={`https://api.heavenhold.com/wp-admin/post-new.php?post_type=teams`}
                >
                    Add a new team
                </Link>
            </div>
    )}
    </Suspense>
  );
}