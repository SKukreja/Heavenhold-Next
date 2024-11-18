"use client";

import React, { useState, useEffect } from "react";
import { Hero, Team, Item } from "#/graphql/generated/types";
import Link from "next/link";
import CategoriesHeader from "#/app/components/CategoriesHeader";
import TeamsList from "#/app/components/RenderTeamsList";

interface ReviewProps {
  hero: Hero;

}

function Review({ hero }: ReviewProps) {  
return (
    <div
        id="Review"
        className="relative overflow-visible z-20 w-full h-auto items-start flex px-0 lg:px-8 pt-4"
    >
            {hero.heroInformation?.analysisFields?.detailedReview && (
                <div className="w-full h-full mb-16">                
                        <div className="text-white" dangerouslySetInnerHTML={{ __html: hero.heroInformation.analysisFields.detailedReview }}></div>
                </div>   
            )
            }
    </div>
);
}

export default Review;
