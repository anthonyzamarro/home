"use client"

import { HttpLink } from "@apollo/client"
import { ApolloNextAppProvider, ApolloClient, InMemoryCache } from "@apollo/client-integration-nextjs"

const client = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: "http://localhost:4000/",
    }),
  })

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={client}>{children}</ApolloNextAppProvider>
}
