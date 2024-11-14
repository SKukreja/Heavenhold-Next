"use client";
import React, { useState, useEffect } from "react";
import { Hero, GetMetaVotesQuery, GetMetaVotesWithUserVoteQuery } from "#/graphql/generated/types";
import FadeInImage from "#/app/components/FadeInImage";
import { upvote, downvote } from "#/ui/icons";
import {
  useGetMetaVotesQuery,
  useGetMetaVotesWithUserVoteQuery,
  useDownvoteHeroMutation,
  useUpvoteHeroMutation,
} from "#/graphql/generated/types";
import Loading from "#/app/components/loading";
import { getIpAddress } from "#/ui/helpers";
import Link from "next/link";

interface MetaProps {
  categoryId: number;
  loggedInUserId: number | null;
  heroes: Hero[];
}

export default function MetaList({ categoryId, loggedInUserId, heroes }: MetaProps) {
  const ipAddress = getIpAddress();
  const [upvoteTeam] = useUpvoteHeroMutation();
  const [downvoteTeam] = useDownvoteHeroMutation();
  const userId = loggedInUserId ? loggedInUserId : null;
  const isOverall = (categoryId === 0)  

  const { data: votesDataOverall, loading: votesLoadingOverall } = useGetMetaVotesQuery({
    skip: !isOverall,
  });
  
  const { data: votesDataWithUserVote, loading: votesLoadingWithUserVote } = useGetMetaVotesWithUserVoteQuery({
    variables: { categoryId: categoryId, ipAddress: ipAddress + "", userId: userId ?? 0 },
    skip: isOverall,
  });

  const votesData = isOverall ? votesDataOverall : votesDataWithUserVote;
  const votesLoading = isOverall ? votesLoadingOverall : votesLoadingWithUserVote;

  // Declare combinedHeroes before using it
  const [combinedHeroes, setCombinedHeroes] = useState<(Hero & { votes: number; userVote: string | null })[]>([]);

  // Now you can use combinedHeroes
  const heroQuarter = Math.ceil((combinedHeroes.length - 10) / 4);

  useEffect(() => {
    if (votesData && heroes) {
      // Map heroes with votes based on the selected query data
      const heroesWithVotes = isOverall
        ? (votesData as GetMetaVotesQuery)?.metaVotesTotals?.map((vote) => {
            const hero = heroes.find((hero) => hero.databaseId === vote?.heroId);
            if (hero) {
              return {
                ...hero,
                votes: (vote?.upvoteCount ?? 0) - (vote?.downvoteCount ?? 0),
                userVote: null,
              };
            }
            return null;
          }).filter((hero): hero is Hero & { votes: number; userVote: null } => hero !== null)
        : (votesData as GetMetaVotesWithUserVoteQuery)?.metaVotesByCategory?.map((vote) => {
            const hero = heroes.find((hero) => hero.databaseId === vote?.heroId);
            if (hero) {
              return {
                ...hero,
                votes: (vote?.upvoteCount ?? 0) - (vote?.downvoteCount ?? 0),
                userVote: vote?.userVote ?? null,
              };
            }
            return null;
          }).filter((hero): hero is Hero & { votes: number; userVote: string | null } => hero !== null);
  
      // Filter heroes without votes by excluding those already in `heroesWithVotes`
      const heroesWithVotesIds = heroesWithVotes?.map((hero) => hero.databaseId);
      const heroesWithoutVotes = heroes
        .filter((hero) => !heroesWithVotesIds?.includes(hero.databaseId))
        .map((hero) => ({
          ...hero,
          votes: 0,
          userVote: null,
        }));
  
      // Combine and sort heroes with and without votes, excluding 1-star heroes
      const allCombinedHeroes = [...heroesWithVotes ?? [], ...heroesWithoutVotes]
        .filter((x) => x.heroInformation?.bioFields?.rarity?.toString() !== "1 Star")
        .sort((a, b) => b.votes - a.votes);
  
      setCombinedHeroes(allCombinedHeroes);
    }
  }, [votesData, heroes, isOverall]);

  if (votesLoading || !combinedHeroes.length) {
    return <Loading />;
  }

  const handleUpvote = async (
      heroId: number,
      categoryId: number,
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault()
      event.stopPropagation();
      if (isOverall) return;
      try {
        const userIpAddress = await getIpAddress();
        const { data } = await upvoteTeam({
          variables: {
            heroId: heroId,
            categoryId: categoryId,
            userId: userId! as number ?? 0,
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
        event.preventDefault()
        event.stopPropagation();
        if (isOverall) return;
        try {
          const userIpAddress = await getIpAddress();
          const { data } = await downvoteTeam({
            variables: {
              heroId: heroId,
              categoryId: categoryId,
              userId: userId! as number ?? 0,
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
    
    if (!combinedHeroes || !heroQuarter) {
      return <Loading />;
    }

    return (
        <div className="w-full h-auto flex flex-col z-10 mb-8">
          <div
            className={`p-4 w-full flex justify-between`}
            style={{ background: 'linear-gradient(to right, rgba(255, 14, 14, 0.3) 0%, rgba(255, 14, 14, 0.2) 85%, transparent 100%)' }}
          >
            <span className="px-4 lg:px-0 text-6xl lg:text-[156px] leading-none font-oswald font-bolder text-[rgba(255,14,14,1)]">S</span>
            <RenderHeroes
              heroes={combinedHeroes.slice(0, 10)}
              categoryId={categoryId}
              handleUpvote={handleUpvote}
              handleDownvote={handleDownvote}
              isOverall={isOverall}
            />
          </div>
          <div
            className={`p-4 b w-full flex justify-between`}
            style={{ background: 'linear-gradient(to right, rgba(252, 171, 16, 0.4) 0%, rgba(252, 171, 16, 0.2) 85%, transparent 100%)' }}
          >
            <span className="px-4 lg:px-0 text-6xl lg:text-[156px] leading-none font-oswald font-bolder text-[rgba(252,171,16,1)]">A</span>
            <RenderHeroes
              heroes={combinedHeroes.slice(10, 10 + heroQuarter)}
              categoryId={categoryId}
              handleUpvote={handleUpvote}
              handleDownvote={handleDownvote}
              isOverall={isOverall}
            />
          </div>
          <div
            className={`p-4 border-green-900 w-full flex justify-between`}
            style={{ background: 'linear-gradient(to right, rgba(104, 142, 38, 0.4) 0%, rgba(104, 142, 38, 0.2) 85%, transparent 100%)' }}
          >
            <span className="px-4 lg:px-0 text-6xl lg:text-[156px] leading-none font-oswald font-bolder text-[rgba(104,142,38,1)]">B</span>
            <RenderHeroes
              heroes={combinedHeroes.slice(10 + heroQuarter + 1, 10 + heroQuarter * 2)}
              categoryId={categoryId}
              handleUpvote={handleUpvote}
              handleDownvote={handleDownvote}
              isOverall={isOverall}
            />
          </div>
          <div
            className={`p-4 border-blue-900 w-full flex justify-between`}
            style={{ background: 'linear-gradient(to right, rgba(67, 97, 238, 0.3) 0%, rgba(67, 97, 238, 0.2) 85%, transparent 100%)' }}
          >
            <span className="px-4 lg:px-0 text-6xl lg:text-[156px] leading-none font-oswald font-bolder text-[rgba(67,97,238,1)]">C</span>
            <RenderHeroes
              heroes={combinedHeroes.slice(10 + heroQuarter * 2 + 1, 10 + heroQuarter * 3)}
              categoryId={categoryId}
              handleUpvote={handleUpvote}
              handleDownvote={handleDownvote}
              isOverall={isOverall}
            />
          </div>
          <div
            className={`p-4 border-gray-800 w-full flex justify-between`}
            style={{ background: 'linear-gradient(to right, rgba(144, 30, 245, 0.2) 0%, rgba(144, 30, 245, 0.1) 85%, transparent 100%)' }}
          >
            <span className="px-4 lg:px-0 text-6xl lg:text-[156px] leading-none font-oswald font-bolder text-[rgba(144,30,245,1)]">D</span>
            <RenderHeroes
              heroes={combinedHeroes.slice(10 + heroQuarter * 3 + 1, combinedHeroes.length)}
              categoryId={categoryId}
              handleUpvote={handleUpvote}
              handleDownvote={handleDownvote}
              isOverall={isOverall}
            />
          </div>
        </div>
      );
}

interface RenderHeroesProps {
  heroes: (Hero & { votes: number; userVote: string | null })[];
  categoryId: number;
  handleUpvote: (heroId: number, categoryId: number, event: React.MouseEvent<HTMLButtonElement>) => void;
  handleDownvote: (heroId: number, categoryId: number, event: React.MouseEvent<HTMLButtonElement>) => void;
  isOverall: boolean;
}

const RenderHeroes: React.FC<RenderHeroesProps> = ({ heroes, categoryId, handleUpvote, handleDownvote, isOverall }) => {
  return (
    <div className="w-[calc(100%-6rem)] lg:w-[calc(100%-12rem)] h-full z-20 gap-4 flex flex-col">
      {heroes.length > 0 && heroes.map((hero) => {
        const heroSlug = hero?.slug ?? "";
        return (
          <Link href={`/heroes/${heroSlug}`} key={heroSlug + "-colosseum"} 
          data-filter={`${hero.heroInformation?.bioFields?.element?.toLowerCase()} ${hero.heroInformation?.bioFields?.role?.toLowerCase()} r-${hero.heroInformation?.bioFields?.rarity?.toString().replace(/ /g, "-").toLowerCase()}`}>
          <div
            key={heroSlug + "-colosseum"}             
            className={`hero-box h-32 text-white bg-gray-transparent flex justify-start items-center w-full`}
          >
            <div className="hero-header cursor-pointer flex w-full items-center justify-start px-4 lg:px-8 py-4">
              <div className="w-12 h-full flex mr-4">
                <div className="flex justify-between items-center gap-2 lg:gap-4 flex-1">
                  <div className="votes flex flex-col justify-between items-center gap-2">
                    <button
                      className="w-4 h-4 flex justify-center items-center fill-white z-20 disabled:fill-orange-300"
                      onClick={(e) => handleUpvote(hero.databaseId, categoryId, e)}
                      disabled={hero?.userVote && hero?.userVote === "upvote" || isOverall}
                    >
                      {!isOverall && upvote()}
                    </button>
                    <div className="text-lg flex justify-center items-center font-oswald">
                      {hero.votes}
                    </div>
                    <button
                      className="w-4 h-4 flex justify-center items-center fill-white z-20 disabled:fill-blue-300"
                      onClick={(e) => handleDownvote(hero.databaseId, categoryId, e)}
                      disabled={hero?.userVote && hero?.userVote === "downvote" || isOverall}
                    >
                      {!isOverall && downvote()}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start w-4/5 gap-8">
                <FadeInImage
                  src={
                    hero.heroInformation?.thumbnail?.node.sourceUrl
                      ? hero.heroInformation?.thumbnail?.node.sourceUrl + ""
                      : "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
                  }
                  className={`w-16 h-16 aspect-square object-cover bg-gradient-to-b border-b-4 ${
                    hero?.heroInformation?.bioFields?.rarity?.toString() === "3 Star"
                      ? `from-yellow-700 to-yellow-500 border-b-4 border-yellow-500`
                      : hero?.heroInformation?.bioFields?.rarity?.toString() === "2 Star"
                      ? `from-gray-600 to-gray-400 border-b-4 border-gray-400`
                      : `from-amber-800 to-amber-600 border-b-4 border-amber-600`
                  }`}
                  width={100}
                  height={100}
                  alt={hero.title ?? ""}
                />
                <div className="text-xs lg:text-lg flex flex-col font-bold w-[calc(100%-100px)] mb-0">
                  <span>{hero?.title ?? ""}</span>
                </div>
              </div>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
};