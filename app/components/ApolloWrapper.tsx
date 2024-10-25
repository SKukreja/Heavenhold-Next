// ApolloWrapper.tsx
"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

function makeClient() {
  const httpLink = new HttpLink({
    uri: "https://api.heavenhold.com/graphql",
  });

  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            heroes: {
              merge(existing, incoming) {
                return { ...existing, ...incoming };
              },
            },
          },
        },
      },
    }),
    link: httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
