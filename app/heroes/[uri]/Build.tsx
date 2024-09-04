// Build.tsx
"use client";

import { Hero } from "#/graphql/generated/types";
import { useState, useEffect } from "react";
import { upvote, downvote } from "#/ui/icons";
import { GetItemsLikesAndDislikesWithUserVote as query } from "./HeroQueries";
import Loading from "#/app/components/loading";

// Define the Item interface
interface Item {
  itemId: number;
  likeCount: number;
  dislikeCount: number;
  userId: number;
  userVote: string;
  item: {
    id: string;
    title: string;
    itemTypes: {
      nodes: {
        name: string;
      }[];
    };
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
  };
}

// Define the BuildProps interface
interface BuildProps {
  hero: Hero;
  userId: number;
}

// Function to fetch build data
async function fetchBuildData(heroId: number, userId: number): Promise<Item[]> {
  const variables = { heroId, userId };

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await res.json();
  if (responseBody && responseBody.data && responseBody.data.itemsLikesByHero) {
    return responseBody.data.itemsLikesByHero;
  } else {
    throw new Error("Failed to fetch builds");
  }
}

// Function to get the user's IP address
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

// Function to upvote an item
async function upvoteItem(heroId: number, itemId: number, userId: number, ipAddress: string) {
  const mutation = `
    mutation UpvoteItem($heroId: Int!, $itemId: Int!, $userId: Int!, $ipAddress: String!) {
      upvoteItem(input: { heroId: $heroId, itemId: $itemId, userId: $userId, ipAddress: $ipAddress }) {
        success
        currentVote
      }
    }
  `;

  const variables = { heroId, itemId, userId, ipAddress };

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: mutation, variables }),
  });

  const responseBody = await res.json();
  return responseBody.data.upvoteItem;
}

// Function to downvote an item
async function downvoteItem(heroId: number, itemId: number, userId: number, ipAddress: string) {
  const mutation = `
    mutation DownvoteItem($heroId: Int!, $itemId: Int!, $userId: Int!, $ipAddress: String!) {
      downvoteItem(input: { heroId: $heroId, itemId: $itemId, userId: $userId, ipAddress: $ipAddress }) {
        success
        currentVote
      }
    }
  `;

  const variables = { heroId, itemId, userId, ipAddress };

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: mutation, variables }),
  });

  const responseBody = await res.json();
  return responseBody.data.downvoteItem;
}

// Function to map specific equipment types to "Weapon"
const mapToWeapon = (equipment: string): string => {
  const weaponTypes = [
    "One-Handed Sword",
    "Two-Handed Sword",
    "Rifle",
    "Bow",
    "Basket",
    "Staff",
    "Gauntlet",
    "Claw",
  ];
  return weaponTypes.includes(equipment) ? "Weapon" : equipment;
};

export default function Build({ hero, userId }: BuildProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadItems() {
      const fetchedItems = await fetchBuildData(hero.heroId, userId);
      setItems(fetchedItems);
      setLoading(false);
    }
    loadItems();
  }, [hero.heroId, userId]);

  const handleUpvote = async (itemId: number) => {
    try {
      const ipAddress = await getIpAddress();
      const response = await upvoteItem(hero.heroId, itemId, userId, ipAddress);
      if (response && response.success) {
        setItems((prevItems) =>
          prevItems.map((suggestion) => {
            if (suggestion.itemId === itemId) {
              // Calculate the adjustment based on the previous vote
              let likeAdjustment = 1;
              let dislikeAdjustment = 0;
              if (suggestion.userVote === "dislike") {
                likeAdjustment = 1;
                dislikeAdjustment = -1;
              }
              return {
                ...suggestion,
                userVote: "like",
                likeCount: suggestion.likeCount + likeAdjustment,
                dislikeCount: suggestion.dislikeCount + dislikeAdjustment,
              };
            }
            return suggestion;
          })
        );
      }
    } catch (error) {
      console.error("Error handling upvote:", error);
    }
  };
  
  const handleDownvote = async (itemId: number) => {
    try {
      const ipAddress = await getIpAddress();
      const response = await downvoteItem(hero.heroId, itemId, userId, ipAddress);
      if (response && response.success) {
        setItems((prevItems) =>
          prevItems.map((suggestion) => {
            if (suggestion.itemId === itemId) {
              // Calculate the adjustment based on the previous vote
              let dislikeAdjustment = 1;
              let likeAdjustment = 0;
              if (suggestion.userVote === "like") {
                dislikeAdjustment = 1;
                likeAdjustment = -1;
              }
              return {
                ...suggestion,
                userVote: "dislike",
                likeCount: suggestion.likeCount + likeAdjustment,
                dislikeCount: suggestion.dislikeCount + dislikeAdjustment,
              };
            }
            return suggestion;
          })
        );
      }
    } catch (error) {
      console.error("Error handling downvote:", error);
    }
  };
  

  // Group items by type, mapping specific types to "Weapon"
  const groupItemsByType = (items: Item[]) => {
    return items.reduce((groups, suggestion) => {
      const itemType = mapToWeapon(suggestion.item.itemTypes.nodes[0]?.name || "Unknown");
      if (!groups[itemType]) {
        groups[itemType] = [];
      }
      groups[itemType].push(suggestion);
      return groups;
    }, {} as Record<string, Item[]>);
  };

  // Sort items within each type group by (likeCount - dislikeCount) in descending order
  const sortedItemsByType = groupItemsByType(items);

  for (const type in sortedItemsByType) {
    sortedItemsByType[type].sort(
      (a, b) =>
        b.likeCount - b.dislikeCount - (a.likeCount - a.dislikeCount)
    );
  }

  if (loading) {
    return <Loading />;
  }
  const renderedTypes = new Set();

  return (
    <div
      id="Build"
      className="relative overflow-visible z-10 w-full h-[calc(100vhrem)] items-start flex flex-col text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg px-4 3xl:px-8"
    >
      <div className="px-4 3xl:px-8 w-full justify-start h-[calc(100%-8rem)] flex">
        <div className="w-full h-full">
          <h2 className="text-xl h-[calc(4rem)] 3xl:text-2xl font-medium uppercase tracking-widest mb-16">
            {hero?.heroInformation?.bioFields?.name} / Build
          </h2>

          <div className="w-full flex gap-8 flex-wrap">
            {hero.heroInformation?.bioFields?.compatibleEquipment?.map((equipment) => {
              const mappedType = equipment ? mapToWeapon(equipment) : '';
              // Skip rendering if this type has already been rendered
              if (renderedTypes.has(mappedType)) {
                return null;
              }

              // Mark the type as rendered
              renderedTypes.add(mappedType);

              const itemsOfType = sortedItemsByType[mappedType] || [];
              return (
                <div key={equipment} className="w-[calc(50%-1rem)] mb-16">
                  <div className="flex items-center mb-4">
                    <h3 className="mb-6 text-2xl 3xl:text-4xl font-medium font-oswald">
                      {mappedType}
                    </h3>
                  </div>
                  {itemsOfType.length > 0 &&
                    itemsOfType.map((suggestion) => (
                      <div
                        key={suggestion.itemId}
                        className="item mb-1 bg-gray-900 p-4 flex items-center justify-between"
                      >
                        <div>
                          <img
                            className="w-16 h-16"
                            src={suggestion.item.featuredImage?.node?.sourceUrl}
                            alt={suggestion.item.title}
                          />
                        </div>
                        <div className="grow px-4 font-medium">
                          {suggestion.item.title}
                        </div>
                        <div className="votes flex flex-col justify-between items-center gap-2">
                          <button
                            className="w-4 h-4 flex flex-col justift-center items-center fill-white"
                            onClick={() => handleUpvote(suggestion.itemId)}
                            disabled={suggestion.userVote === "like"}
                          >
                            {upvote()}
                          </button>
                          <div className="text-lg flex flex-col justift-center items-center font-oswald">
                            {suggestion.likeCount - suggestion.dislikeCount}
                          </div>
                          <button
                            className="w-4 h-4 flex flex-col justift-center items-center fill-white"
                            onClick={() => handleDownvote(suggestion.itemId)}
                            disabled={suggestion.userVote === "dislike"}
                          >
                            {downvote()}
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    className="w-full mt-4 p-4 bg-gray-900 font-medium"
                    onClick={() => alert("Suggest an item for " + mappedType)}
                  >
                    + Suggest {mappedType}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
