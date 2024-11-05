// ApolloWrapper.tsx
"use client";

import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

import { BatchHttpLink } from "@apollo/client/link/batch-http";

function makeClient() {
  const httpLink = new BatchHttpLink({
    uri: "https://api.heavenhold.com/graphql",
    credentials: "include",
    fetchOptions: { cache: "no-store" },
    batchMax: 5, // No more than 5 operations per batch
    batchInterval: 20
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
      query: {
        fetchPolicy: 'cache-first',
      },
    },
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
