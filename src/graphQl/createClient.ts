import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.100.28:4000/',
    cache: new InMemoryCache(),
  });
};
