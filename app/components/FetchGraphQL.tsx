export async function fetchGraphQL<T extends object>(
  query: any,
  variables: any = {}
): Promise<T> {
  let allNodes: any[] = [];
  let hasNextPage = true;
  let afterCursor: string | null = null;

  while (hasNextPage) {
    const res: Response = await fetch('https://api.heavenhold.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query.loc?.source.body,
        variables: { ...variables, after: afterCursor },
      }),
      next: { revalidate: 3600 }, // Optional revalidation time
    });

    if (!res.ok) {
      throw new Error('Failed to fetch GraphQL data');
    }

    const responseData: { data: T } = await res.json();
    const data = responseData.data;

    if ('items' in data && data.items) {
      const items = data.items as any;
      allNodes.push(...items.nodes);

      const pageInfo = items.pageInfo;
      afterCursor = pageInfo?.endCursor;
      hasNextPage = pageInfo?.hasNextPage;
    } else if ('heroes' in data && data.heroes) {
      const heroes = data.heroes as any;
      allNodes.push(...heroes.nodes);

      const pageInfo = heroes.pageInfo;
      afterCursor = pageInfo?.endCursor;
      hasNextPage = pageInfo?.hasNextPage;
    } else if ('teams' in data && data.teams) {
      const teams = data.teams as any;
      allNodes.push(...teams.nodes);

      const pageInfo = teams.pageInfo;
      afterCursor = pageInfo?.endCursor;
      hasNextPage = pageInfo?.hasNextPage;
    } else {
      hasNextPage = false;
    }
  }

  // Ensure the return structure matches the expected type for heroes
  if ('heroInformation' in allNodes[0]) {
    return { heroes: { nodes: allNodes } } as T;
  } 
  else if ('itemInformation' in allNodes[0]) {
    return { items: { nodes: allNodes } } as T;
  }
  else if ('teamFields' in allNodes[0]) {
    return { teams: { nodes: allNodes } } as T;
  }

  throw new Error('Unexpected data structure');
}
