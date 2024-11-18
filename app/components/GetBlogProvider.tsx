// components/GetBlogProvider.tsx
"use client";

import React, { createContext, useContext, useMemo } from 'react';
import { GetBlogQuery } from '#/graphql/generated/types';

interface BlogContextType {
  data: GetBlogQuery | null;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
  initialData: GetBlogQuery;
  children: React.ReactNode;
}

export function BlogProvider({ initialData, children }: BlogProviderProps) {
  const memoizedData = useMemo(() => initialData, [initialData]);


  return (
    <BlogContext.Provider value={{ data: memoizedData }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}
