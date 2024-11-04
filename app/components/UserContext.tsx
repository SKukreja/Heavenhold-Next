// app/components/UserContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the user data type
export interface User {
  user_id: number | null;
  user_login: string;
  user_email: string;
}

// Define the shape of the context data
interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Create the user context with default values
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define a provider component
interface UserProviderProps {
  children: ReactNode;
  initialUser: User | null;
}

export const UserProvider = ({ children, initialUser }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for consuming the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
