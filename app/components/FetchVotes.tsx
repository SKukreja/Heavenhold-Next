export async function fetchVotes<T extends object>(
    query: any,
    variables: any = {}
  ): Promise<T> {
    const res: Response = await fetch('https://api.heavenhold.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query.loc?.source.body,
        variables: variables,
      }),
      next: { revalidate: 300 }, // Optional revalidation time
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch GraphQL data');
    }
  
    const responseData: { data: T } = await res.json();
    return responseData.data;
  }
  