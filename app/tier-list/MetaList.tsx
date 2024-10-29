"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Hero, Team, Item, HeroInformationAbilityFieldsPartyBuff_Fields, HeroInformationAbilityFieldsPartyBuff } from "#/graphql/generated/types";
import FadeInImage from "#/app/components/FadeInImage";
import { upvote, downvote, chevron, crown } from "#/ui/icons";
import Link from "next/link";
import {
  useGetMetaVotesWithUserVoteQuery,
  useDownvoteHeroMutation,
  useUpvoteHeroMutation,
} from "#/graphql/generated/types";
import { equipmentIcons } from "#/ui/icons";
import Loading from "#/app/components/loading";
import { access } from "fs";
import { getIpAddress } from "#/ui/helpers";
import { useHeroes } from '#/app/components/GetHeroesProvider';

export default function MetaList() {
    const { data } = useHeroes();
    const ipAddress = getIpAddress();
    const heroes = useMemo(() => [...(data?.heroes?.nodes ?? [])] as Hero[], [data]);
    const heroesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const [upvoteTeam] = useUpvoteHeroMutation();
    const [downvoteTeam] = useDownvoteHeroMutation();
    const userId = 1;    

    const { data: votesData, loading: votesLoading } =
        useGetMetaVotesWithUserVoteQuery({
        variables: { categoryId: 1, ipAddress: ipAddress + "", userId: userId },
    });

    const heroesWithVotes = votesData?.metaVotesByCategory
    ?.map((vote) => ({
      ...heroes.find((hero) => hero.databaseId === vote?.heroId),
      votes: (vote?.upvoteCount ?? 0) - (vote?.downvoteCount ?? 0),
      userVote: vote?.userVote,
    }))
    .sort((a, b) => b.votes - a.votes);

    const heroesWithoutVotes = heroes
        .filter(
        (hero) =>
            !votesData?.metaVotesByCategory?.some(
            (vote) => vote?.heroId === hero.databaseId
            )
        )
        .map((team) => ({ ...team, votes: 0, userVote: null }));

    const [combinedHeroes, setCombinedHeroes] = useState<
        (Hero & { votes: number; userVote: string | null })[]
    >([
        ...((heroesWithVotes ?? []) as (Hero & {
        votes: number;
        userVote: string | null;
        })[]),
        ...((heroesWithoutVotes ?? []) as (Hero & {
        votes: number;
        userVote: string | null;
        })[]),
    ]);

    const handleUpvote = async (
        heroId: number,
        categoryId: number,
        event: React.MouseEvent<HTMLButtonElement>
      ) => {
        event.stopPropagation();
        try {
          const userIpAddress = await getIpAddress();
          const { data } = await upvoteTeam({
            variables: {
              heroId: heroId,
              categoryId: categoryId,
              userId: userId,
              ipAddress: userIpAddress,
            },
          });
          if (data?.upvoteHero?.success) {
            setCombinedHeroes((prevHeroes) =>
              prevHeroes
                .map((hero) => {
                  if (hero.databaseId === heroId) {
                    // Calculate the adjustment based on the previous vote
                    let likeAdjustment = 1;
                    if ("userVote" in hero && hero.userVote === "downvote") {
                      likeAdjustment = 2;
                    }
                    return {
                      ...hero,
                      userVote: "upvote",
                      votes: hero.votes + likeAdjustment,
                    };
                  }
                  return hero;
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
        categoryId: number,
        event: React.MouseEvent<HTMLButtonElement>
      ) => {
        event.stopPropagation();
        try {
          const userIpAddress = await getIpAddress();
          const { data } = await downvoteTeam({
            variables: {
              heroId: heroId,
              categoryId: categoryId,
              userId: userId,
              ipAddress: userIpAddress,
            },
          });
          if (data?.downvoteHero?.success) {
            setCombinedHeroes((prevHeroes) =>
              prevHeroes
                .map((hero) => {
                  if (hero.databaseId === heroId) {
                    // Calculate the adjustment based on the previous vote
                    let dislikeAdjustment = 1;
                    if ("userVote" in hero && hero.userVote === "upvote") {
                      dislikeAdjustment = 2;
                    }
                    return {
                      ...hero,
                      userVote: "downvote",
                      votes: hero.votes - dislikeAdjustment,
                    };
                  }
                  return hero;
                })
                .sort((a, b) => b.votes - a.votes)
            );
          }
        } catch (error) {
          console.error("Error handling downvote:", error);
        }
      };    

    console.log(votesData)

    return (
    <div
      id="TierList"
      className="relative overflow-visible z-20 w-full h-auto items-start flex px-4 3xl:px-8"
    >
      <div className="px-4 3xl:px-8 w-full flex-col justify-start h-full flex">
        <div className="w-full text-8xl font-oswald py-8">Tier List</div>
        <div className={"w-full h-16 flex justify-between items-end mb-16"}>
          <div className="flex flex-col justify-start">
            <span className="font-normal text-xs tracking-widest">Categories</span>
            <div className="text-lg flex items-center gap-4 font-bold">
              <span
                // className={`cursor-pointer ${
                //   activeTeamTypes.includes("Colosseum")
                //     ? "text-fire"
                //     : "text-gray-500 hover:text-fire"
                // }`}
                // onClick={() => toggleTeamType("Colosseum")}
              >
                Colosseum
              </span>
              <span
                // className={`cursor-pointer ${
                //   activeTeamTypes.includes("Raid")
                //     ? "text-water"
                //     : "text-gray-500 hover:text-water"
                // }`}
                // onClick={() => toggleTeamType("Raid")}
              >
                Raid
              </span>
              <span
                // className={`cursor-pointer ${
                //   activeTeamTypes.includes("Arena")
                //     ? "text-earth"
                //     : "text-gray-500 hover:text-earth"
                // }`}
                // onClick={() => toggleTeamType("Arena")}
              >
                Arena
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 h-full flex flex-col">
            <div className="text-8xl text-fire font-oswald font-bolder bg-">S</div>
          </div>
          <div className="w-1/2 h-full mb-4">
            {combinedHeroes.length > 0 && combinedHeroes.map((hero) => {
              const heroSlug = hero?.slug ?? "";
              return (
                <div
                  key={heroSlug + "-colosseum"}
                  className={`team-box text-white bg-gray-transparent w-full mb-4`}
                >
                  <div
                    className="team-header cursor-pointer flex items-center justify-between px-4 lg:px-8 py-4"
                  >
                    <div className="w-0 lg:w-12 h-full flex mr-6 lg:mr-4">
                      <div className="flex justify-between items-center gap-2 lg:gap-4 flex-1">
                        <div className="votes flex flex-col justify-between items-center gap-2">
                          <button
                            className="w-4 h-4 flex justify-center items-center fill-white z-20 disabled:fill-orange-300"
                            onClick={(e) =>
                              handleUpvote(
                                hero.databaseId,
                                1, // ID of Colosseum
                                e
                              )
                            }
                            disabled={
                              hero &&
                              "userVote" in hero &&
                              hero.userVote === "upvote"
                            }
                          >
                            {upvote()}
                          </button>
                          <div className="text-lg flex justify-center items-center font-oswald">
                            {hero.votes}
                          </div>
                          <button
                            className="w-4 h-4 flex justify-center items-center fill-white z-20 disabled:fill-blue-300"
                            onClick={(e) =>
                              handleDownvote(
                                hero.databaseId,
                                1, // ID of Colosseum
                                e
                              )
                            }
                            disabled={
                              hero &&
                              "userVote" in hero &&
                              hero.userVote === "downvote"
                            }
                          >
                            {downvote()}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col lg:flex-row flex items-center justify-start w-4/5 gap-8">                    
                      <FadeInImage
                        src={
                          hero.heroInformation?.thumbnail?.node.sourceUrl
                            ? hero.heroInformation?.thumbnail?.node.sourceUrl + ""
                            : "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
                        }
                        className={`w-16 h-16 aspect-square object-cover bg-gradient-to-b border-b-4 ${
                          (hero?.heroInformation?.bioFields?.rarity?.toString() == '3 Star') ? `from-yellow-700 to-yellow-500 border-b-4 border-yellow-500` : (hero?.heroInformation?.bioFields?.rarity?.toString() == '2 Star' ? `from-gray-600 to-gray-400 border-b-4 border-gray-400` : `from-amber-800 to-amber-600 border-b-4 border-amber-600`)
                        }`} 
                        width={100}
                        height={100}
                        alt={hero.title + ""}
                      />                    
                      <div className="text-sm lg:text-lg flex flex-col font-bold w-[calc(100%-100px)] mb-4 lg:mb-0">
                        <span>{hero?.title ?? ""}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
      );
}