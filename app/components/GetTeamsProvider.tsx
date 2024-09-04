// components/GetTeamsProvider.tsx
"use client";

import React, { createContext, useContext } from 'react';
import { useGetAllTeamsSuspenseQuery, GetAllTeamsQuery } from '#/graphql/generated/types';

interface TeamsContextType {
  data: GetAllTeamsQuery | null;
}

const TeamsContext = createContext<TeamsContextType | undefined>(undefined);

export function TeamsProvider({ children }: React.PropsWithChildren<{}>) {
  const { data } = useGetAllTeamsSuspenseQuery();

  // Manage data loading state
  if (!data) {
    return <div>Loading...</div>; // or handle loading state as needed
  }

  return (
    <TeamsContext.Provider value={{ data }}>
      {children}
    </TeamsContext.Provider>
  );
}

export function useTeams() {
  const context = useContext(TeamsContext);
  if (!context) {
    throw new Error('useTeams must be used within a TeamsProvider');
  }
  return context;
}
