import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ruk8de1lwz01wba22ka4e8/master',
    cache: new InMemoryCache()
})