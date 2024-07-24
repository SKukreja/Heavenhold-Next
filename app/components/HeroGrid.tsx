import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import FadeInImage from "./FadeInImage"; // Import the client-side component

// Define the types for the data returned by the GraphQL query
interface BioFields {
  name: string;
  rarity: string;
  element: string;
  role: string;
}

interface PartyBuff {
  affectsParty: boolean;
  value: string;
  stat: string;
}

interface AbilityFields {
  chainStateTrigger: string;
  chainStateResult: string;
  partyBuff: PartyBuff[];
}

interface IllustrationNode {
  node: {
    sourceUrl: string;
  };
}

interface Portrait {
  art: IllustrationNode;
  title: string;
}

interface HeroInformation {
  bioFields: BioFields;
  abilityFields?: AbilityFields;
  portrait?: Portrait[];
}

interface Hero {
  title: string;
  uri: string;
  heroInformation: HeroInformation;
}

// Update the function to return the correct type
async function getHeroes(): Promise<Hero[]> {
  const query = `
  {
    heroes(first: 200) {
      nodes {
        title
        uri
        heroInformation {
          bioFields {
            rarity
            element
            role
            name
          }
          abilityFields {
            chainStateTrigger
            chainStateResult
            partyBuff {
              affectsParty
              value
              stat
            }
          }
          portrait {
            art {
              node {
                sourceUrl
              }
            }
            title
          }
        }
      }
    }
}`;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    }
  );
  console.log(res);
  console.log(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`);

  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.statusText}`);
  }

  const data = await res.json();

  if (!data.data || !data.data.heroes || !data.data.heroes.nodes) {
    throw new Error("Invalid data structure received");
  }

  return data.data.heroes.nodes;
}

export default async function HeroGrid(): Promise<JSX.Element> {
  const heroes = await getHeroes();
  heroes.sort((a, b) => a.heroInformation.bioFields.name.localeCompare(b.heroInformation.bioFields.name));

  return (
    <Suspense fallback={<Loading />}>
      <div id="HeroList" className="flex flex-wrap justify-center gap-8 p-4">
        {heroes.map((hero) => (
          <HeroLink key={hero.uri} hero={hero} />
        ))}
      </div>
    </Suspense>
  );
}

const HeroLink = ({ hero }: { hero: Hero }) => {
  return (
    <Link
      href={`${hero.uri}`}
      data-filter={`${hero.heroInformation.bioFields.element.toLowerCase()} ${hero.heroInformation.bioFields.role.toLowerCase()} r-${hero.heroInformation.bioFields.rarity.toString().replace(/ /g, "-").toLowerCase()}`}
      className={`${"e-" + hero.heroInformation.bioFields.element.toLowerCase()} ${hero.heroInformation.bioFields.element.toLowerCase()} r-${hero.heroInformation.bioFields.rarity.toString().replace(/ /g, "-").toLowerCase()} ${hero.heroInformation.bioFields.role.toLowerCase()} relative w-64 h-96 flex m-[10px] cursor-pointer align-middle transition-all duration-200 after:transition-all after:linear after:duration-200 hover:after:outline-offset-[-5px] ease grayscale-[30%] hover:grayscale-0 after:w-full after:h-full after:absolute after:inset-0 after:z-20 after:pointer-events-none after:border after:border-gray-700 after:outline after:outline-2 after:outline-offset-[-10px]`}
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        <FadeInImage
          src={hero.heroInformation.portrait ? hero.heroInformation.portrait[0].art.node.sourceUrl : 'https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg'}
          quality={100}
          fill={true}
          alt={hero.title}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-between p-4 pointer-events-none h-36 align-center before:bg-gradient-to-b before:from-black before:to-transparent before:w-full before:h-full before:z-10 before:absolute before:opacity-50 before:inset-0">
        <span className="relative z-20 text-xs tracking-widest text-center uppercase w-100 drop-shadow-2xl">
          {hero.heroInformation.bioFields.element && (
            <FadeInImage src={`/icons/${hero.heroInformation.bioFields.element.toLowerCase()}.webp`} className="mb-2" width={25} height={25} alt={hero.heroInformation.bioFields.element} />
          )}
          {hero.heroInformation.bioFields.role && (
            <FadeInImage src={`/icons/${hero.heroInformation.bioFields.role.toLowerCase()}.webp`} width={25} height={25} alt={hero.heroInformation.bioFields.role} />
          )}
        </span>
        <span className="relative z-20 text-lg font-bold text-center w-100 drop-shadow-2xl">
          {hero.heroInformation?.abilityFields?.chainStateTrigger && hero.heroInformation?.abilityFields?.chainStateTrigger.toString().toLowerCase() !== "none" && (
            <FadeInImage src={`/icons/${hero.heroInformation.abilityFields.chainStateTrigger.toString().toLowerCase()}.webp`} className="mb-2" width={25} height={25} alt={hero.heroInformation.abilityFields.chainStateTrigger} />
          )}
          {hero.heroInformation?.abilityFields?.chainStateResult && hero.heroInformation?.abilityFields?.chainStateResult.toString().toLowerCase() !== "none" && (
            <FadeInImage src={`/icons/${hero.heroInformation.abilityFields.chainStateResult.toString().toLowerCase()}.webp`} className="mb-2" width={25} height={25} alt={hero.heroInformation.abilityFields.chainStateResult} />
          )}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-4 pointer-events-none h-72 align-center before:bg-gradient-to-t before:from-black before:to-transparent before:w-full before:h-full before:z-10 before:absolute before:inset-0">
        <span className="relative z-20 text-xs tracking-widest text-center uppercase w-100 drop-shadow-2xl">
          {hero.title.replace(hero.heroInformation.bioFields.name, '').trim()}
        </span>
        <span className="relative z-20 text-2xl font-bold text-center w-100 drop-shadow-2xl">
          {hero.heroInformation.bioFields.name}
        </span>
        <span className="relative z-20 flex flex-col gap-1 m-2 text-xs font-bold text-center w-100 drop-shadow-2xl">
          {hero.heroInformation.abilityFields?.partyBuff && hero.heroInformation.abilityFields.partyBuff.map((buff) => (
            <span key={hero.title + buff.stat} className="">
              {buff.affectsParty && (
                <>[Party] {buff.stat} <span className="text-lime-500">+{buff.value}%</span></>
              )}
            </span>
          ))}
        </span>
      </div>
    </Link>
  );
}
