import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4thhdiu04ej01t66ij9drkc/master',
  cache: new InMemoryCache()
});