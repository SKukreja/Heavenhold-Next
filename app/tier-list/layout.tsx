"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LayoutProps {
  params: {
    uri: string;
  };
}

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
  const pathname = usePathname();

  return (
    <div
      id="TierList"
      className="relative overflow-visible z-20 w-full h-auto items-start flex pt-24 lg:pt-0 px-0 lg:px-4 3xl:px-8"
    >
      <div className="px-0 lg:px-4 3xl:px-8 w-full flex-col justify-start h-full flex">
        <div className="w-full text-8xl font-oswald px-8 lg:px-0 py-8">Tier List</div>
        <div className={"w-full h-16 flex justify-between items-end mb-16"}>
          <div className="flex flex-col justify-start px-8 lg:px-0">
            <span className="font-normal text-xs tracking-widest">Categories</span>
            <div className="text-lg flex items-center gap-4 font-bold">
              <Link
                href="/tier-list"
                className={`cursor-pointer hover:text-gray-500 ${
                  pathname === '/tier-list' ? 'text-gray-500' : ''
                }`}
              >
                All
              </Link>
              <Link
                href="/tier-list/colosseum"
                className={`cursor-pointer hover:text-fire ${
                  pathname.includes('colosseum') ? 'text-fire' : ''
                }`}
              >
                Colosseum
              </Link>
              <Link
                href="/tier-list/raid"
                className={`cursor-pointer hover:text-water ${
                  pathname.includes('raid') ? 'text-water' : ''
                }`}
              >
                Raid
              </Link>
              <Link
                href="/tier-list/arena"
                className={`cursor-pointer hover:text-earth ${
                  pathname.includes('arena') ? 'text-earth' : ''
                }`}
              >
                Arena
              </Link>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
