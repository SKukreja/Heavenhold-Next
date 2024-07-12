import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

// Define the types for the data returned by the GraphQL query
interface BioFields {
    name: string;
    rarity: string;
    element: string;
    role: string;
  }
  
  interface HeroInformation {
    bioFields: BioFields;
  }
  
  interface Hero {
    title: string;
    uri: string;
    heroInformation?: HeroInformation;
    featuredImage?: {
      node?: {
        sourceUrl: string;
      };
    };
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
  heroes.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {heroes.map((hero) => (
            <Link href={`${hero.uri}`} className='relative w-64 h-96 
            bg-center
            bg-cover
            inline-block
            m-[10px]
            filter
            grayscale-[40%]
            cursor-pointer
            transition
            duration-200
            ease-in-out
            align-middle' 
            style={{backgroundImage: `url(${(hero.featuredImage?.node?.sourceUrl
                ?  hero.featuredImage?.node?.sourceUrl
                : "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg")})`}}                
            >
                <div className="absolute top-0 left-0 right-0 flex flex-col p-4 h-36 align-center after:bg-gradient-to-b after:from-black after:to-transparent after:w-full after:h-full after:-z-10 after:absolute after:inset-0">
                    <span className="text-xs tracking-widest text-center uppercase w-100 drop-shadow-2xl">{hero.title.replace(hero.heroInformation?.bioFields?.name + '', '').trim()}</span>
                    <span className="text-lg font-bold text-center w-100 drop-shadow-2xl">{hero.heroInformation?.bioFields?.name}</span>
                </div>
                <div className='frame border border-[#2e2923]
            outline
            outline-2            
            outline-[#6c5223]
            outline-offset-[-10px] w-full h-full z-10'></div>
            </Link>
        ))}
      </div>
    </Suspense>
  );
}