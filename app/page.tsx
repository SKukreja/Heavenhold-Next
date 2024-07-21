import Link from "next/link";
import { Suspense } from "react";
import Loading from "#/app/components/loading";

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

export default async function HeroList(): Promise<JSX.Element> {
  const heroes = await getHeroes();
  heroes.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Suspense fallback={<Loading />}>
      <div>
        {heroes.map((hero) => (
          <div key={hero.uri} className="p-4 card">
            <Link href={`${hero.uri}`} className={"w-32"}>
              <h3 className="flex items-center">
              <img
                  src={
                    hero.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl
                      ? hero.featuredImage.node.mediaDetails.sizes[0].sourceUrl
                      : "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
                  }
                  className="w-10"
                  alt={hero.title}
                />
                <span className="ml-8">{hero.title}</span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </Suspense>
  );
}