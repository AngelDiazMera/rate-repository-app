import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { createApolloClient } from './src/graphQl/createClient';
import { ApolloProvider } from '@apollo/client';

const graphQlClient = createApolloClient();

export default function App() {
  return (
    <ApolloProvider client={graphQlClient}>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
}
