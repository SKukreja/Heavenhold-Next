// Build.tsx
"use client";

import { Hero } from "#/types";
import { useState, useEffect } from "react";
import { GetItemsLikesAndDislikesWithUserVote as query } from "./HeroQueries";

interface Item {
  itemId: number;
  likeCount: number;
  dislikeCount: number;
  userVote: string;
}

interface BuildProps {
  hero: Hero;
  userId: number;
}

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
  console.log(responseBody);
  if (responseBody && responseBody.data && responseBody.data.itemsLikesByHero) {
    return responseBody.data.itemsLikesByHero;
  } else {
    throw new Error("Failed to fetch builds");
  }
}

async function upvoteItem(heroId: number, itemId: number, userId: number) {
  const mutation = `
    mutation UpvoteItem($heroId: Int!, $itemId: Int!, $userId: Int!, $ipAddress: String!) {
      upvoteItem(input: { heroId: $heroId, itemId: $itemId, userId: $userId, ipAddress: $ipAddress }) {
        success
        currentVote
      }
    }
  `;

  const variables = { heroId, itemId, userId, ipAddress: "127.0.0.1" }; // Replace with actual IP

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

async function downvoteItem(heroId: number, itemId: number, userId: number) {
  const mutation = `
    mutation DownvoteItem($heroId: Int!, $itemId: Int!, $userId: Int!, $ipAddress: String!) {
      downvoteItem(input: { heroId: $heroId, itemId: $itemId, userId: $userId, ipAddress: $ipAddress }) {
        success
        currentVote
      }
    }
  `;

  const variables = { heroId, itemId, userId, ipAddress: "127.0.0.1" }; // Replace with actual IP

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
    const response = await upvoteItem(hero.heroId, itemId, userId);
    if (response.success) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.itemId === itemId
            ? { ...item, userVote: "like", likeCount: item.likeCount + 1 }
            : item
        )
      );
    }
  };

  const handleDownvote = async (itemId: number) => {
    const response = await downvoteItem(hero.heroId, itemId, userId);
    if (response.success) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.itemId === itemId
            ? { ...item, userVote: "dislike", dislikeCount: item.dislikeCount + 1 }
            : item
        )
      );
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="Build" className="relative overflow-visible z-10 w-full h-[calc(100vhrem)] items-start flex flex-col text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg px-4 3xl:px-8">
    <div className="px-4 3xl:px-8 w-full justify-start h-[calc(100%-8rem)] flex">
      <div className="w-1/2 h-full">
        <h2 className="text-xl h-[calc(4rem)] 3xl:text-2xl font-medium uppercase tracking-widest mb-16">{hero.title.replace(hero.heroInformation.bioFields.name, '').trim()} {hero.heroInformation.bioFields.name} / Build</h2>            
        
        <div className="w-full flex gap-8 flex-wrap">
         
        
          <div className="w-1/4 mb-16">
          {items.map((item) => (
        <div key={item.itemId} className="item">
          <div>
            <strong>Item ID:</strong> {item.itemId}
          </div>
          <div>
            <strong>Likes:</strong> {item.likeCount}
          </div>
          <div>
            <strong>Dislikes:</strong> {item.dislikeCount}
          </div>
          <div>
            <strong>Your Vote:</strong> {item.userVote}
          </div>
          <button onClick={() => handleUpvote(item.itemId)} disabled={item.userVote === "like"}>
            Upvote
          </button>
          <button onClick={() => handleDownvote(item.itemId)} disabled={item.userVote === "dislike"}>
            Downvote
          </button>
        </div>
      ))}
          </div>
        </div>
      </div>    
    </div>    
  </div>
  );
}
