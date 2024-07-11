interface MovieFields {
  movieQuote: string;
}

interface Movie {
  title: string;
  uri: string;
  movieFields: MovieFields;
}

interface MoviesData {
  movies: {
    nodes: Movie[];
  };
}

async function getMovies(): Promise<Movie[]> {
  const query = `
  query getMovies {
    movies {
      nodes {
        movieFields {
          movieQuote
        }
        title
        uri
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
        // ... any other headers you need to include (like authentication tokens)
      },
      next: { revalidate: 10 },
    }
  );

  const { data }: { data: MoviesData } = await res.json();

  return data.movies.nodes;
}

export default async function MovieList(): Promise<JSX.Element> {
  const movies = await getMovies();

  return (
    <div>
      {movies.map((movie) => {
        const { movieFields: { movieQuote } = { movieQuote: '' }, title, uri } = movie;
        return (
          <div key={uri} className="card">
            <h3>{title}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: movieQuote,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
