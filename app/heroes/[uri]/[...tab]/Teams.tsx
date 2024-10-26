"use client";

import React, { useState, useEffect } from "react";
import { Hero, Team, Item } from "#/graphql/generated/types";
import FadeInImage from "#/app/components/FadeInImage";
import { upvote, downvote, chevron, crown } from "#/ui/icons";
import Link from "next/link";
import {
  useGetTeamVotesWithUserVoteQuery,
  useDownvoteTeamMutation,
  useUpvoteTeamMutation,
} from "#/graphql/generated/types";
import { equipmentIcons } from "#/ui/icons";
import Loading from "#/app/components/loading";
import { access } from "fs";

interface TeamsProps {
  hero: Hero;
  teams: Team[];
  heroes: Hero[];
  items: Item[];
}

async function getIpAddress(): Promise<string> {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.ip; // Return the fetched IP address
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return "192.168.201.1"; // Fallback IP address
  }
}

function Teams({ hero, teams, heroes, items }: TeamsProps) {
  const userId = 1;
  const { data: votesData, loading: votesLoading } =
    useGetTeamVotesWithUserVoteQuery({
      variables: { heroId: hero.databaseId, userId: userId },
    });

  const [upvoteTeam] = useUpvoteTeamMutation();
  const [downvoteTeam] = useDownvoteTeamMutation();

  const heroTeams = teams.filter((team) =>
    team.teamFields?.composition?.some(
      (slot) => slot?.hero?.nodes[0].id === hero.id
    )
  );

  const teamsWithVotes = votesData?.teamsVotesByHero
    ?.map((vote) => ({
      ...heroTeams.find((team) => team.databaseId === vote?.teamId),
      votes: (vote?.upvoteCount ?? 0) - (vote?.downvoteCount ?? 0),
      userVote: vote?.userVote,
    }))
    .sort((a, b) => b.votes - a.votes);

  const teamsWithoutVotes = heroTeams
    .filter(
      (team) =>
        !votesData?.teamsVotesByHero?.some(
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
    if (!votesLoading && votesData) {
      const heroTeams = teams.filter((team) =>
        team.teamFields?.composition?.some(
          (slot) => slot?.hero?.nodes[0].id === hero.id
        )
      );

      const teamsWithVotes = votesData?.teamsVotesByHero
        ?.map((vote) => ({
          ...heroTeams.find((team) => team.databaseId === vote?.teamId),
          votes: (vote?.upvoteCount ?? 0) - (vote?.downvoteCount ?? 0),
          userVote: vote?.userVote,
        }))
        .sort((a, b) => b.votes - a.votes);

      const teamsWithoutVotes = heroTeams
        .filter(
          (team) =>
            !votesData?.teamsVotesByHero?.some(
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
    }
  }, [votesLoading, votesData, teams, hero]);

  const handleUpvote = async (
    heroId: number,
    teamId: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    try {
      const userIpAddress = await getIpAddress();
      const { data } = await upvoteTeam({
        variables: {
          heroId: heroId,
          teamId,
          userId: userId,
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
    heroId: number,
    teamId: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    try {
      const userIpAddress = await getIpAddress();
      const { data } = await downvoteTeam({
        variables: {
          heroId: heroId,
          teamId,
          userId: userId,
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

  return (
    <div
      id="Teams"
      className="relative overflow-visible z-20 w-full h-auto items-start flex px-4 3xl:px-8"
    >
      <div className="px-4 3xl:px-8 w-full flex-col justify-start h-full flex">
        <div className="w-full h-full mb-4">
          {combinedTeams.map((team) => {
            const teamSlug = team?.slug ?? "";
            return (
              <div
                key={teamSlug}
                className="team-box text-white bg-gray-transparent w-full mb-4"
              >
                <div
                  className="team-header cursor-pointer flex items-center justify-between px-4 lg:px-8 py-4"
                  onClick={toggleTeamDetails}
                >
                  <div className="w-0 lg:w-24 h-full flex mr-6 lg:mr-16">
                    <div className="flex justify-between items-center gap-2 lg:gap-4 flex-1">
                      <div className="votes flex flex-col justify-between items-center gap-2">
                        <button
                          className="w-4 h-4 flex justify-center items-center fill-white z-20 disabled:fill-orange-300"
                          onClick={(e) =>
                            handleUpvote(
                              hero.databaseId,
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
                              hero.databaseId,
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
                    <div className="text-sm lg:text-lg font-bold w-full mb-4 lg:w-1/2 lg:mb-0">
                      {team?.title ?? ""}
                    </div>
                    <div className="flex justify-center items-center gap-2 lg:gap-4 w-full lg:w-1/2">
                      {team.teamFields?.composition?.map((slot, index) => {
                        const heroId = slot?.hero?.nodes[0].id;
                        const heroData = heroes.find((h) => h.id === heroId);
                        const element = heroData?.heroInformation?.bioFields?.element?.toLowerCase();
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
                                heroData?.heroInformation?.bioFields?.rarity?.toString() === "3 Star"
                                  ? `from-yellow-700 to-yellow-500 border-b-4 border-yellow-500`
                                  : heroData?.heroInformation?.bioFields?.rarity?.toString() === "2 Star"
                                    ? `from-gray-600 to-gray-400 border-b-4 border-gray-400`
                                    : `from-brown-700 to-brown-500 border-b-4 border-brown-500`
                              }`}
                              width={300}
                              height={300}
                              alt={hero.title + ""}
                            />
                            {index === 0 &&
                            team?.teamFields?.teamType !==
                              "Arena" && (
                              <span className="absolute -top-2 -left-2 w-4 h-4 lg:w-8 lg:h-12 lg:h-8 drop-shadow-md lead fill-white">
                                {crown()}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <span className="chevron-icon duration-200 origin-center ease-in-out ml-6 lg:ml-16 flex items-center justify-center fill-white h-2 w-2 lg:h-4 lg:w-4">
                    {" "}
                    {chevron()}
                  </span>
                </div>
                <div
                  className="team-details hidden px-4 lg:px-8 py-4 w-full text-2xs lg:text-xs justify-between" 
                >
                  <div className="h-24 flex w-4 lg:w-24 mr-6 lg:mr-16"></div>
                  <div className="flex-col-reverse lg:flex-row flex w-4/5">
                    <div className="team-explanation flex-1 flex flex-col gap-4 pr-0 lg:pr-32 w-full lg:w-[calc(50%-3rem)]">
                      <span className="w0">{team?.teamFields?.notes ?? ""}

                    </div>
                    <div className="team-build flex items-start justify-start gap-2 lg:gap-4 -ml-[calc(3rem)] w-[calc(100%+3rem)] lg:w-[calc(50%+3rem)]">
                      <div className="w-32 h-full flex flex-col justify-start items-center gap-2">
                          <div className="w-8 h-12 lg:h-8 mb-2"></div>
                          <div className="w-8 h-12 lg:h-8 flex justify-center items-center text-center pr-4"><FadeInImage className={"w-4 h-auto"} src={equipmentIcons["One-Handed Sword"]} width={12} height={12} alt={"Weapon icon"} /></div>
                          <div className="w-8 h-12 lg:h-8 flex justify-center items-center text-center pr-4"><FadeInImage className={"w-4 h-auto"} src={equipmentIcons["Shield"]} width={12} height={12} alt={"Shield icon"} /></div>
                          <div className="w-8 h-12 lg:h-8 flex justify-center items-center text-center pr-4"><FadeInImage className={"w-4 h-auto"} src={equipmentIcons["Accessory"]} width={12} height={12} alt={"Accessory icon"} /></div>
                          <div className="w-8 h-12 lg:h-8 flex justify-center items-center text-center pr-4"><FadeInImage className={"w-4 h-auto"} src={equipmentIcons["Merch"]} width={12} height={12} alt={"Merch icon"} /></div>
                          <div className="w-8 h-12 lg:h-8 flex justify-center items-center text-center pr-4"><FadeInImage className={"w-4 h-auto"} src={equipmentIcons["Relic"]} width={12} height={12} alt={"Relic icon"} /></div>
                          <div className="w-8 h-12 lg:h-8 flex justify-center items-center text-center pr-4"><FadeInImage className={"w-4 h-auto pl-[calc(0.1rem)] pr-[calc(0.1rem)]"} src={equipmentIcons["Cards"]} width={12} height={12} alt={"Card icon"} /></div>
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
                                <div className="text-center mb-4 h-12 lg:h-8 font-bold flex items-center justify-center">
                                  <Link href={`${heroData?.uri}`} className="ml-auto mr-auto w-full">
                                    {heroData?.title}
                                  </Link>
                                </div>
                              </div>
                              <div className="build-items">
                                <div className="build-object build-weapon">
                                  <div className="build flex flex-col gap-2">                                  
                                    <Link href={`${weapon?.uri}`} className={`flex items-center gap-1 lg:gap-2 h-12 lg:h-8 ${weapon ? "" : "pointer-events-none text-gray-500"}`}>
                                      <FadeInImage src={weapon?.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} width={20} height={20} className={`${weapon ? "" : "invisible"} hidden lg:flex`} alt={weapon?.title + " Icon"} /> 
                                      <span className="w-full">{weapon ? weapon?.title : "N/A"}</span>
                                    </Link>
                                    <Link href={`${shield?.uri}`} className={`flex items-center gap-1 lg:gap-2 h-12 lg:h-8 ${shield ? "" : "pointer-events-none text-gray-500"}`}>
                                      <FadeInImage src={shield?.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} width={20} height={20} className={`${shield ? "" : "invisible"} hidden lg:flex`} alt={shield?.title + " Icon"} />
                                      <span className="w-full">{shield ? shield?.title : "N/A"}</span>
                                    </Link>
                                    <Link href={`${accessory?.uri}`} className={`flex items-center gap-1 lg:gap-2 h-12 lg:h-8 ${accessory ? "" : "pointer-events-none text-gray-500"}`}>
                                      <FadeInImage src={accessory?.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} width={20} height={20} className={`${accessory ? "" : "invisible"} hidden lg:flex`} alt={accessory?.title + " Icon"} />
                                      <span className="w-full">{accessory ? accessory?.title : "N/A"}</span>
                                    </Link>
                                    <Link href={`${merch?.uri}`} className={`flex items-center gap-1 lg:gap-2 h-12 lg:h-8 ${merch ? "" : "pointer-events-none text-gray-500"}`}>
                                      <FadeInImage src={merch?.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} width={20} height={20} className={`h-full aspect-square justify-center items-center hidden lg:flex ${merch ? "" : "invisible"}`} alt={merch?.title + " Icon"} />
                                      <span className="w-full">{merch ? merch?.title : "N/A"}</span>
                                    </Link>
                                    <Link href={`${relic?.uri}`} className={`flex items-center gap-1 lg:gap-2 h-12 lg:h-8 ${relic ? "" : "pointer-events-none text-gray-500"}`}>
                                      <FadeInImage src={relic?.featuredImage?.node?.sourceUrl ?? "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"} width={20} height={20} className={`${relic ? "" : "invisible"} hidden lg:flex`} alt={relic?.title + " Icon"} />
                                      <span className="w-full">{relic ? relic?.title : "N/A"}</span>
                                    </Link>
                                    <Link href={`#`} className="flex items-center gap-1 lg:gap-2 h-12 lg:h-8">
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
                  <span className="ml-6 lg:ml-16 h-4 w-4"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Teams;
