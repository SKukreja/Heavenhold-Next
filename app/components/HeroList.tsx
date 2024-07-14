import Link from "next/link";
import Image from "next/image";
import { useEffect, Suspense, useRef, useState } from "react";
import Loading from "./loading";

// Define the types for the data returned by the GraphQL query
interface Hero {
  title: string;
  uri: string;
  featuredImage?: {
    node?: {
      mediaDetails?: {
        sizes?: {
          sourceUrl: string;
          name: string;
        }[];
      };
    };
  };
}

interface HeroListProps {
  heroPathValue: string;
}

// Update the function to return the correct type
async function getHeroes(): Promise<Hero[]> {
  const query = `
  {
    heroes(first: 200) {
      nodes {
        title
        uri
        featuredImage {
          node {
            mediaDetails {
              sizes(include: THUMBNAIL) {
                sourceUrl
                name
              }
            }
          }
        }
      }
    }
  }
  `;

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

const HeroList: React.FC<HeroListProps> = ({ heroPathValue }) => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const heroesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const fetchHeroes = async () => {
      const heroesData = await getHeroes();
      heroesData.sort((a, b) => a.title.localeCompare(b.title));
      setHeroes(heroesData);
    };

    fetchHeroes();
  }, []);

  useEffect(() => {
    const element = heroesRef.current[heroPathValue];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [heroPathValue, heroes]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="pt-4 pb-4">
        {heroes.map((hero) => (
          <div
            key={hero.uri}
            ref={(el) => { heroesRef.current[hero.uri] = el; }}
            className="pt-4 pb-4 pl-8 pr-8 text-gray-400 card hover:bg-gray-800"
          >
            <Link href={`${hero.uri}`} className={"w-full"}>
              <h3 className="flex items-center">
                <Image
                  src={
                    hero.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl
                      ? hero.featuredImage.node.mediaDetails.sizes[0].sourceUrl
                      : "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
                  }
                  className="w-10"
                  width={50}
                  height={50}
                  alt={hero.title}
                />
                <span className="flex items-center ml-4 text-sm font-medium text-gray-400 hover:text-gray-300">{hero.title}</span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </Suspense>
  );
}

export default HeroList;
