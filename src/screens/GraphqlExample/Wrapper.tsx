import * as React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import GraphqlExample from './GraphqlExample';

type Props = {};

const POKEAPI_GQL_CLIENT = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
});

function Wrapper(props: Props) {
  return (
    <ApolloProvider client={POKEAPI_GQL_CLIENT}>
      <GraphqlExample {...props} />
    </ApolloProvider>
  );
}

export default Wrapper;
