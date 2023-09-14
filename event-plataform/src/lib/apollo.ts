import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cll7lqkv10lbq01ughjoz14dw/master',
    cache: new InMemoryCache()
})