// components/GetTeamsProvider.tsx
"use client";

import React, { createContext, useContext, useMemo } from 'react';
import { GetAllTeamsQuery, GetTeamVotesQuery } from '#/graphql/generated/types';

interface TeamsContextType {
  data: GetAllTeamsQuery | null;
  votes: GetTeamVotesQuery | null;
}

const TeamsContext = createContext<TeamsContextType | undefined>(undefined);

interface TeamsProviderProps {
  initialData: GetAllTeamsQuery;
  initialVotes: GetTeamVotesQuery;
  children: React.ReactNode;
}

export function TeamsProvider({ initialData, initialVotes, children }: TeamsProviderProps) {
  const memoizedData = useMemo(() => initialData, [initialData]);
  const memoizedVotes = useMemo(() => initialVotes, [initialVotes]);

  return (
    <TeamsContext.Provider value={{ data: memoizedData, votes: memoizedVotes }}>
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
