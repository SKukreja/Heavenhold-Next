"use client";

import { useContext } from "react";
import HeroContext from "./HeroContext"; // Import HeroContext
import Bio from "./[...tab]/Bio";

export default function BioPage() {
  const hero = useContext(HeroContext);

  if (!hero) {
    return <div>Error: Hero not found</div>;
  }

  return <Bio hero={hero} />;
}
