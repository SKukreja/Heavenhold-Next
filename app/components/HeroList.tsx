import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, Suspense } from "react";
import { usePathname } from 'next/navigation';
import Loading from "./loading";
import FadeInImage from "./FadeInImage";

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

const HeroList: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const heroesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();  
  const [activeHero, setActiveHero] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      const heroesData = await getHeroes();
      heroesData.sort((a, b) => a.title.localeCompare(b.title));
      setHeroes(heroesData);
    };

    fetchHeroes();
  }, []);

  useEffect(() => {
    if (!heroesRef.current) return;
    const element = heroesRef.current[pathname + "/"];
    if (element && containerRef.current) {
      const offset = 100; // Adjust this value to control the scroll offset
      const elementRect = element.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollTop = containerRef.current.scrollTop;
      const offsetPosition = elementRect.top - containerRect.top + scrollTop - offset;

      containerRef.current.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveHero(pathname + "/");
    }
  }, [pathname, heroes]);

  return (
    <Suspense fallback={<Loading />}>
      <div ref={containerRef} className="pt-4 pb-4 overflow-y-auto scrollbar-none h-full">
        {heroes.map((hero) => (
          <div
            key={hero.uri}
            ref={(el) => { heroesRef.current[hero.uri] = el; }}
            className={`pt-4 pb-4 pl-8 pr-8 card ${
              activeHero === hero.uri ? 'bg-gray-700 text-gray-300' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <Link href={`${hero.uri}`} className={"w-full"}>
              <h3 className="flex items-center">
                <FadeInImage
                  src={
                    hero.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl
                      ? hero.featuredImage.node.mediaDetails.sizes[0].sourceUrl
                      : "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
                  }
                  className="w-12 h-12 aspect-square object-cover"
                  width={50}
                  height={50}
                  alt={hero.title}
                />
                <span className="flex items-center pl-4 text-xs xl:text-sm font-medium w-[calc(100%-4rem)]">{hero.title}</span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </Suspense>
  );
}

export default HeroList;
