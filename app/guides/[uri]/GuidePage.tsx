// app/heroes/[uri]/[...tab]/HeroPageClient.tsx

'use client';

import { useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import { Guide } from "#/graphql/generated/types";
import { useGuides } from "#/app/components/GetGuidesProvider";

interface GuidePageProps {
  uri: string;
}

function capitalize(s: string): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function GuidePage({
  uri,
}: GuidePageProps) {  
  // Fetch data on the server
  const { data: guidesData } = useGuides();
  const guides = guidesData as any;
  if (!('data' in guides)) return;
  const guideData = guides.data.nodes as Guide[];
  const guide = guideData.find((guide) => guide.slug === uri);

  const [currentGuide, setCurrentGuide] = useState<Guide | null>(guide as Guide);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentGuide(guide as Guide);
  }, [guide]);

  if (!currentGuide) {
    return <div>Error: Guide not found</div>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div id="GuidePage" className="w-full h-auto">
      <div id="guide-header" className="w-full text-8xl font-oswald px-8 py-8">{currentGuide.title}</div>
      <div className="px-8" dangerouslySetInnerHTML={{ __html: currentGuide.content || "" }}></div>
    </div>
  );
}
