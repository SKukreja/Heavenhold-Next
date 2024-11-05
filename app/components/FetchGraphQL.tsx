export async function fetchGraphQL(query: any, variables?: any) {
    const res = await fetch('https://api.heavenhold.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query.loc?.source.body, // This gets the query body from the GraphQL document
        variables,
      }),
      next: { revalidate: 3600 }, // Optional revalidation time
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch GraphQL data');
    }
  
    const { data } = await res.json();
    return data;
  }
  