"use client";

import { PropsWithChildren } from "react";
import CategoriesHeader from "../components/CategoriesHeader";
import Link from "next/link";

export default function Layout({ children }: PropsWithChildren) {


  return (
    <div
      id="TeamsList"
      className="relative overflow-visible z-20 w-full h-auto items-start flex pt-24 lg:pt-0 px-0 lg:px-4 3xl:px-8"
    >
      <div className="px-0 lg:px-4 3xl:px-8 w-full flex-col justify-start h-full flex">
        <div className="w-full text-8xl font-oswald px-8 lg:px-0 py-8">Teams</div>
        <div className="w-full h-16 flex justify-between items-end mb-8">
          <CategoriesHeader currentLocation="/teams" />
          <Link
            className="text-lg lg:text-xl text-gray-400 font-bold bg-transparent lg:bg-gray-900 lg:hover:bg-gray-800 hover:text-white px-0 py-0 lg:px-8 lg:py-4 flex justify-center items-center"
            href={`https://api.heavenhold.com/wp-admin/post-new.php?post_type=teams`}
          >
            + Submit Team
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
