"use client";

import React, { useState, useEffect } from "react";
import { Hero, Team, Item } from "#/graphql/generated/types";
import FadeInImage from "#/app/components/FadeInImage";
import { upvote, downvote, chevron } from "#/ui/icons";
import Link from "next/link";
import {
  useGetTeamVotesWithUserVoteQuery,
  useDownvoteTeamMutation,
  useUpvoteTeamMutation,
} from "#/graphql/generated/types";
import Loading from "#/app/components/loading";

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
      className="relative overflow-visible z-10 w-full h-[calc(100vh-12rem)] items-start flex px-4 3xl:px-8"
    >
      <div className="px-4 3xl:px-8 w-full flex-col justify-start h-full flex">
        <div className="w-full h-full">
          {combinedTeams.map((team) => {
            const teamSlug = team?.slug ?? "";
            return (
              <div
                key={teamSlug}
                className="team-box text-white bg-gray-transparent w-full mb-4"
              >
                <div
                  className="team-header cursor-pointer flex items-center justify-between px-8 py-2"
                  onClick={toggleTeamDetails}
                >
                  <div className="w-24 h-full flex mr-16">
                    <div className="flex justify-between items-center gap-4 flex-1">
                      <div className="votes flex flex-col justify-between items-center gap-2">
                        <button
                          className="w-4 h-4 flex justify-center items-center fill-white z-10 disabled:fill-orange-300"
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
                          className="w-4 h-4 flex justify-center items-center fill-white z-10 disabled:fill-blue-300"
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
                  <div className="text-lg font-bold flex-1 w-1/3">
                    {team?.title ?? ""}
                  </div>
                  <div className="flex justify-center items-center gap-4">
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
                          className={`team-hero e-${element} relative`}
                        >
                          <FadeInImage
                            src={
                              heroData?.heroInformation?.thumbnail?.node
                                .sourceUrl
                                ? heroData?.heroInformation?.thumbnail?.node
                                    .sourceUrl
                                : "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
                            }
                            className={`w-32 h-32 aspect-square object-cover bg-gradient-to-b border-b-4 ${
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
                            alt={hero.title + ""}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <span className="chevron-icon duration-200 origin-center ease-in-out ml-16 flex items-center justify-center fill-white h-4 w-4">
                    {" "}
                    {/* Added margin on all sides */}
                    {chevron()}
                  </span>
                </div>
                <div
                  className="team-details hidden p-8 w-full" 
                  id={`${teamSlug}-details`}
                >
                  <div className="h-24 flex w-24 mr-16"></div>
                  <div className="team-explanation w-1/3">
                    {team?.teamFields?.notes ?? ""}
                  </div>
                  <div className="team-build">
                    {team.teamFields?.composition?.map(
                      (slot: any, index: number) => {
                        const heroId = slot?.hero?.nodes[0].id;
                        const heroData = heroes.find((h) => h.id === heroId);
                        const element =
                          heroData?.heroInformation?.bioFields?.element?.toLowerCase();
                        const rarity =
                          heroData?.heroInformation?.bioFields?.rarity
                            ?.toString()
                            .toLowerCase();
                        const weapon = items.find(
                          (item) => item.id === slot?.weapon?.nodes[0].id
                        );
                        const weaponImage =
                          weapon?.featuredImage?.node?.sourceUrl || "";
                        const weaponTitle = weapon?.title || "";

                        return (
                          <div
                            key={`${teamSlug}-build-${index + 1}`}
                            className="hero-build-section"
                          >
                            <div className={`team-hero-build e-${element}`}>
                              <div className="team-selected-hero-info">
                                <Link href={`${heroData?.uri}`}>
                                  <div
                                    className="hero-image"
                                    style={{
                                      backgroundImage: `url(${
                                        heroData?.featuredImage?.node?.mediaDetails?.sizes?.find(
                                          (size) => size?.name === "THUMBNAIL"
                                        )?.sourceUrl || ""
                                      })`,
                                    }}
                                  >
                                    {index === 0 &&
                                      team?.teamFields?.teamType !==
                                        "Arena" && (
                                        <img
                                          className="lead-icon absolute top-0 left-0"
                                          src="/assets/img/icons/lead.png"
                                          alt="Lead Icon"
                                        />
                                      )}
                                  </div>
                                  {heroData?.title}
                                </Link>
                                <span className="selected-hero-stars">
                                  {rarity === "2 star" ? (
                                    <>
                                      <i className="fas fa-star star2"></i>
                                      <i className="fas fa-star star2"></i>
                                    </>
                                  ) : rarity === "1 star" ? (
                                    <i className="fas fa-star star1"></i>
                                  ) : (
                                    <>
                                      <i className="fas fa-star star3"></i>
                                      <i className="fas fa-star star3"></i>
                                      <i className="fas fa-star star3"></i>
                                    </>
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="build-items">
                              <div className="build-object build-weapon">
                                <span className="build-header">Weapon</span>
                                <div className="build-item-with-image">
                                  <div
                                    className="build-item"
                                    style={{
                                      backgroundImage: `url(${weaponImage})`,
                                    }}
                                  ></div>
                                  <Link href={`${weapon?.uri}`}>
                                    {weaponTitle}
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Teams;
