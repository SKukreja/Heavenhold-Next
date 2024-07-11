import { Suspense } from "react";
import Loading from "../../loading";

// Define the types for the data returned by the GraphQL query
interface Hero {
  title: string;
}

interface GetHeroResponse {
  data: {
    hero: Hero;
  };
}

async function getPost(uri: string): Promise<Hero> {
  const query = `
  query GetHeroByUri($uri: ID!) {
    hero(id: $uri, idType: URI) {
      title      
    }
  }
  `;

  const variables = { uri };

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody: GetHeroResponse = await res.json();

  if (responseBody && responseBody.data && responseBody.data.hero) {
    return responseBody.data.hero;
  } else {
    throw new Error("Failed to fetch the post");
  }
}

interface PostDetailsProps {
  params: {
    uri: string;
  };
}

export default async function PostDetails({ params }: PostDetailsProps): Promise<JSX.Element> {
  const post = await getPost(params.uri);

  return (
    <main>
      <nav>
        <h1>{post.title}</h1>
      </nav>
      <Suspense fallback={<Loading />}>
        <div className="card" key={params.uri}>
          <p dangerouslySetInnerHTML={{ __html: "Hello World" }} />
        </div>
      </Suspense>
    </main>
  );
}
