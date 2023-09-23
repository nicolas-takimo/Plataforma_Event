import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cll7lows70mle01ud3l7s4ad0/master',
    cache: new InMemoryCache()
})