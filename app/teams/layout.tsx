"use client";

import { PropsWithChildren } from "react";
import CategoriesHeader from "../components/CategoriesHeader";

interface LayoutProps {
  params: {
    uri: string;
  };
}

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {


  return (
    <div
      id="TeamsList"
      className="relative overflow-visible z-20 w-full h-auto items-start flex pt-24 lg:pt-0 px-0 lg:px-4 3xl:px-8"
    >
      <div className="px-0 lg:px-4 3xl:px-8 w-full flex-col justify-start h-full flex">
        <div className="w-full text-8xl font-oswald px-8 lg:px-0 py-8">Teams</div>
        <div className="w-full h-16 flex justify-between items-end mb-8">
          <CategoriesHeader currentLocation="/teams" />
        </div>
        {children}
      </div>
    </div>
  );
}
