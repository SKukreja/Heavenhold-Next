"use client";

import { createContext } from "react";
import { Hero } from "#/graphql/generated/types";

const HeroContext = createContext<Hero | null>(null);

export default HeroContext;
