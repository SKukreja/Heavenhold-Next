'use client';

import React, { createContext, useState, ReactNode } from 'react';

interface SidebarContextProps {
  isActive: boolean;
  toggleSidebar: () => void;
  setIsActive: (value: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    const newIsActive = !isActive;
    setIsActive(newIsActive);
    localStorage.setItem('sidebarState', newIsActive.toString());
  };

  return (
    <SidebarContext.Provider value={{ isActive, toggleSidebar, setIsActive }}>
      {children}
    </SidebarContext.Provider>
  );
};
