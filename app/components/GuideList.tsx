// app/heroes/[uri]/[...tab]/HeroPageClient.tsx

'use client';

import { useState, useEffect, useMemo } from "react";
import Loading from "#/app/components/loading";
import { useUser } from '#/app/components/UserContext';
import { useGuides } from "./GetGuidesProvider";
import { Guide } from "#/graphql/generated/types";
import Link from "next/link";

interface GuideListProps {
}

export default function GuideList({}: GuideListProps) {  
    // Fetch data on the server
    const { data: guidesData } = useGuides();
    const guides = guidesData as any;
    const guideData = guides.data.nodes as Guide[];
    const { user } = useUser();
    console.log(guideData)
    const [loading, setLoading] = useState(false);  

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="w-full h-auto px-8">
            {guideData && guideData.map((guide: Guide) => (
            <div key={'guide-' + guide.slug} className="w-full h-auto">
                <Link href={'/guides/' + guide?.slug} className="text-white">{guide?.title}</Link>
            </div>
            ))}
        </div>
    );
}
