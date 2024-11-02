// app/components/UserProviderClient.tsx
"use client";

import React, { createContext, useState, useEffect } from "react";
import { getNonce } from "./GetNonce"; // Adjust the import path if necessary

export const UserContext = createContext({
  user: null,
  setUser: (user: any) => {},
});

export default function UserProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(null);

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

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
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

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
