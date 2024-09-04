"use client";

import React from 'react';
import { Hero, Team, Item } from "#/graphql/generated/types";
import FadeInImage from "#/app/components/FadeInImage";
import { upvote, downvote } from "#/ui/icons";
import Link from 'next/link';
import { useGetTeamVotesWithUserVoteQuery, useDownvoteTeamMutation, useUpvoteTeamMutation } from "#/graphql/generated/types";


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
  const { data: votesData, loading: votesLoading } = useGetTeamVotesWithUserVoteQuery({
    variables: { heroId: hero.databaseId, userId: 1 } // Assuming userId is 1 for example
  });
  const [upvoteTeam] = useUpvoteTeamMutation();
  const [downvoteTeam] = useDownvoteTeamMutation();

  const heroTeams = teams.filter((team) => team.teamFields?.composition?.some((slot) => slot?.hero?.nodes[0].id === hero.id));
  
  const handleUpvote = async (teamId: number) => {
    const userIpAddress = await getIpAddress();
    const { data } = await upvoteTeam({ variables: { heroId: hero.databaseId, teamId, userId: 1, ipAddress: userIpAddress } });
    if (data?.upvoteTeam?.success) {
      console.log("Upvote successful");
    }
  };

  const handleDownvote = async (teamId: number) => {
    const userIpAddress = await getIpAddress();
    const { data } = await downvoteTeam({ variables: { heroId: hero.databaseId, teamId, userId: 1, ipAddress: userIpAddress } });
    if (data?.downvoteTeam?.success) {
      console.log("Downvote successful");
    }
  };

  // Combine teams with votes data
  const teamsWithVotes = votesData?.teamsVotesByHero?.map(vote => ({
    ...teams.find(team => team.databaseId === vote?.teamId),
    votes: (vote?.upvoteCount ?? 0) - (vote?.downvoteCount ?? 0)
  }));

  return (
    <div id="Teams" className="relative overflow-visible z-10 w-full h-[calc(100vh-12rem)] items-start flex px-4 3xl:px-8">
      <div className="px-4 3xl:px-8 w-full flex-col justify-start h-full flex">
        <div className="w-full h-full">
          {heroTeams.map((team) => {
            const teamSlug = team.slug || team.id;
            return (
              <div key={teamSlug} className="team-box text-white bg-gray-transparent w-full mb-4">
                <div className="team-header">
                  <div className="team-heroes flex justify-between items-center p-4 gap-4">
                  <div className="votes flex flex-col justify-between items-center gap-2">
                    <button
                      className="w-4 h-4 flex flex-col justift-center items-center fill-white"
                      onClick={() => handleUpvote(team.databaseId)}
                      disabled={/*suggestion.userVote === "like"*/false}
                    >
                      {upvote()}
                    </button>
                    <div className="text-lg flex flex-col justift-center items-center font-oswald">
                      {/*suggestion.likeCount - suggestion.dislikeCount*/}
                    </div>
                    <button
                      className="w-4 h-4 flex flex-col justift-center items-center fill-white"
                      onClick={() => handleDownvote(team.databaseId)}
                      disabled={/*suggestion.userVote === "dislike"*/false}
                    >
                      {downvote()}
                    </button>
                  </div>
                    <div>{team.title}</div>
                    <div className="flex justify-center items-center gap-4">
                    {team.teamFields?.composition?.map((slot, index) => {
                      const heroId = slot?.hero?.nodes[0].id;
                      const heroData = heroes.find((h) => h.id === heroId);
                      const element = heroData?.heroInformation?.bioFields?.element?.toLowerCase();
                      const role = heroData?.heroInformation?.bioFields?.role?.toLowerCase();

                      return (
                        <div
                          key={`${team.id}-${index + 1}`}
                          id={`${team.id}-${index + 1}`}
                          data-build={teamSlug}
                          className={`team-hero e-${element} relative`}
                        >                          
                            <FadeInImage
                              src={
                                heroData?.heroInformation?.thumbnail?.node.sourceUrl
                                  ? heroData?.heroInformation?.thumbnail?.node.sourceUrl
                                  : "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
                              }
                              className={`w-32 h-32 aspect-square object-cover bg-gradient-to-b border-b-4 ${
                                (heroData?.heroInformation?.bioFields?.rarity?.toString() == '3 Star') ? `from-yellow-700 to-yellow-500 border-b-4 border-yellow-500` : (heroData?.heroInformation?.bioFields?.rarity?.toString() == '2 Star' ? `from-gray-600 to-gray-400 border-b-4 border-gray-400` : `from-brown-700 to-brown-500 border-b-4 border-brown-500`)
                              }`}
                              width={300}
                              height={300}
                              alt={hero.title + ""}
                            />
                            {/*equipmentIcons[role]*/}
                            {/*equipmentIcons[element]*/}
                            {/*index === 0 && team.teamFields?.teamType !== "Arena" && (
                              <img
                                className="lead-icon absolute top-0 left-0"
                                src="/assets/img/icons/lead.png"
                                alt="Lead Icon"
                              />
                            )*/}
                        </div>
                      );
                    })}
                    </div>
                  </div>
                  <div className="expand-button" data-build={teamSlug}>
                    <i id={`${teamSlug}-chevron`} className="fa fa-chevron-down"></i>
                  </div>
                </div>
                <div className="team-details hidden" id={`${teamSlug}-details`}>
                  <div className="team-build">
                    {team.teamFields?.composition?.map((slot, index) => {
                      const heroId = slot?.hero?.nodes[0].id;
                      const heroData = heroes.find((h) => h.id === heroId);
                      const element = heroData?.heroInformation?.bioFields?.element?.toLowerCase();
                      const role = heroData?.heroInformation?.bioFields?.role?.toLowerCase();
                      const heroImage = heroData?.featuredImage?.node?.mediaDetails?.sizes?.find(size => size?.name === 'THUMBNAIL')?.sourceUrl || '';
                      const rarity = heroData?.heroInformation?.bioFields?.rarity?.toString().toLowerCase();
                      const weapon = items.find((item) => item.id === slot?.weapon?.nodes[0].id);
                      const weaponImage = weapon?.featuredImage?.node?.sourceUrl || '';
                      const weaponTitle = weapon?.title || '';

                      return (
                        <div key={`${teamSlug}-build-${index + 1}`} className="hero-build-section">
                          <div className={`team-hero-build e-${element}`}>
                            <div className="team-selected-hero-info">
                              <Link href={`${heroData?.uri}`} >
                                <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }}>
                                  {/*equipmentIcons[role]*/}
                                  {/*equipmentIcons[element]*/}
                                  {index === 0 && team.teamFields?.teamType !== "Arena" && (
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
                                  style={{ backgroundImage: `url(${weaponImage})` }}
                                ></div>
                                <Link href={`${weapon?.uri}`}>{weaponTitle}</Link>
                              </div>
                            </div>
                            {/* Additional build objects like shield, accessory, etc. */}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="team-explanation">
                    {team.teamFields?.notes}
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
