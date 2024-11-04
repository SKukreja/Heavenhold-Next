"use client";

import { useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import { Hero } from "#/graphql/generated/types";
import { useHeroes } from "#/app/components/GetHeroesProvider";
import TierList from "./TierList";


interface MetaProps {
  params: Promise<{
    uri: string;
    tab?: string[] | undefined;
  }>;
}

export default async function Page({ params }: MetaProps) {
  const tabParam = await params;

  return (
    <TierList activeTab={tabParam.tab?.[0] || "General"} uri={tabParam.uri ?? ""} />
  )
}
