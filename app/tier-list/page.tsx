"use client";

import { useState, useContext, useMemo, useEffect } from "react";
import Loading from "#/app/components/loading";
import { Hero, Item, Team } from "#/graphql/generated/types";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import MetaList from "./[uri]/MetaList";
import { getNonce } from "../components/GetNonce";

export default function Page() {
  const { data: heroesData } = useHeroes();
  
  useEffect(() => {
    async function fetchUserData() {
      // Fetch the nonce
      const nonce = await getNonce();
      if (!nonce) {
        console.error("Failed to get nonce");
        return;
      }

      try {
        // Fetch user data from WordPress API using the nonce
        const response = await fetch(
          "https://api.heavenhold.com/wp-json/custom/v1/current-user",
          {
            method: "GET",
            headers: {
              "X-WP-Nonce": nonce,
            },
            credentials: "include",
          }
        );
        console.log(response)
        if (response.ok) {
          const userData = await response.json();
          console.log(userData)
        } else {
          console.error(
            "Failed to fetch user data:",
            response.status,
            await response.text()
          );
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);

  const heroes = useMemo(() => {
    return [...(heroesData?.heroes?.nodes ?? [])] as Hero[];
  }, [heroesData]);

  return (
    <div
      id="TierListPage"      
    >        
        <MetaList categoryId={0} heroes={heroes} />
    </div>    
  );
}
