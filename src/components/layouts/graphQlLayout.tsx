"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  cache: new InMemoryCache(),
});

export default function GraphQlLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
