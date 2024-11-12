"use client";

import { PropsWithChildren, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CategoriesHeader from "../components/CategoriesHeader";

interface LayoutProps {
  params: {
    uri: string;
  };
}

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {


  return (
    <div
      id="TierList"
      className="relative overflow-visible z-20 w-full h-auto items-start flex pt-24 lg:pt-0 px-0 lg:px-4 3xl:px-8"
    >
      <div className="px-0 lg:px-4 3xl:px-8 w-full flex-col justify-start h-full flex">
        <div className="w-full text-8xl font-oswald px-8 lg:px-0 py-8">Tier List</div>
        <div className="w-full h-16 flex justify-between items-end mb-8">
          <CategoriesHeader currentLocation="/tier-list" />
        </div>
        {children}
      </div>
    </div>
  );
}
