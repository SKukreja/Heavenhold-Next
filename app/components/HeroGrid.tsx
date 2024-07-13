import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import { basic, dark, earth, fire, light, ranged, support, tank, warrior, water } from "ui/icons";
import Image from "next/image";

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
  
  interface HeroInformation {
    bioFields: BioFields;
    abilityFields?: AbilityFields;
  }
  
  interface FeaturedImage {
    node?: {
      sourceUrl: string;
    };
  }
  
  interface Hero {
    title: string;
    uri: string;
    heroInformation: HeroInformation;
    featuredImage?: FeaturedImage;
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
          }
          featuredImage {
            node {
              sourceUrl
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
/*

*/
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {heroes.map((hero) => (
            <Link key={hero.uri} href={`${hero.uri}`} className='relative w-64 h-96 flex m-[10px] cursor-pointer align-middle transition-all duration-200 after:transition-all after:linear after:duration-200 hover:after:outline-offset-[-5px] ease grayscale-[30%] hover:grayscale-0 after:w-full after:h-full after:absolute after:inset-0 after:z-20 after:pointer-events-none after:border after:border-[#2e2923] after:outline after:outline-2 after:outline-[#6c5223] after:outline-offset-[-10px]'>
                    <Image
                        src={hero.featuredImage?.node?.sourceUrl ? hero.featuredImage.node.sourceUrl : 'https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg'}
                        layout="fill"
                        quality={100}
                        className="absolute inset-0 z-0 object-cover w-full h-full"
                        alt={hero.title}
                    />
                    <div className="absolute top-0 left-0 right-0 flex justify-between p-4 pointer-events-none h-36 align-center before:bg-gradient-to-b before:from-black before:to-transparent before:w-full before:h-full before:z-10 before:absolute before:opacity-50 before:inset-0">
                        <span className="relative z-20 text-xs tracking-widest text-center uppercase w-100 drop-shadow-2xl">
                            {hero.heroInformation?.bioFields.element && (<Image src={'/icons/' + hero.heroInformation?.bioFields.element.toLowerCase() + '.webp'} className="mb-2" width={25} height={25} alt={hero.heroInformation.bioFields.element} />)}
                            {hero.heroInformation?.bioFields.role && (<Image src={'/icons/' + hero.heroInformation?.bioFields.role.toLowerCase() + '.webp'} width={25} height={25} alt={hero.heroInformation.bioFields.role} />)}
                        </span>
                        <span className="relative z-20 text-lg font-bold text-center w-100 drop-shadow-2xl">
                            {hero.heroInformation?.abilityFields?.chainStateTrigger && hero.heroInformation?.abilityFields?.chainStateTrigger != "None" && (<Image src={'/icons/' + hero.heroInformation?.abilityFields.chainStateTrigger + '.webp'} className="mb-2" width={25} height={25} alt={hero.heroInformation?.abilityFields?.chainStateTrigger} />)}
                            {hero.heroInformation?.abilityFields?.chainStateResult && hero.heroInformation?.abilityFields?.chainStateResult != "None" &&(<Image src={'/icons/' + hero.heroInformation?.abilityFields.chainStateResult + '.webp'} className="mb-2" width={25} height={25} alt={hero.heroInformation?.abilityFields?.chainStateResult} />)}
                        </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-4 pointer-events-none h-72 align-center before:bg-gradient-to-t before:from-black after:to-transparent before:w-full before:h-full before:z-10 before:absolute before:inset-0">
                        <span className="relative z-20 text-xs tracking-widest text-center uppercase w-100 drop-shadow-2xl">{hero.title.replace(hero.heroInformation?.bioFields?.name + '', '').trim()}</span>
                        <span className="relative z-20 text-2xl font-bold text-center w-100 drop-shadow-2xl">{hero.heroInformation?.bioFields?.name}</span>
                        <span className="relative z-20 flex flex-col gap-1 m-2 text-xs font-bold text-center w-100 drop-shadow-2xl">{hero.heroInformation?.abilityFields?.partyBuff && hero.heroInformation?.abilityFields?.partyBuff.map((buff) => (
                            <span key={hero.title + buff.stat} className="">
                                {buff.affectsParty &&
                                (<>[Party] {buff.stat} <span className="text-lime-500">+{buff.value}%</span></>)
                                }
                            </span>
                        ))}</span>
                    </div>

            </Link>
        ))}
      </div>
    </Suspense>
  );
}