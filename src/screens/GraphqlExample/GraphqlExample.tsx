import * as React from 'react';
import {Text, View} from 'react-native';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from '@apollo/client';

import styles from './styles';

type Props = {};

const POKEAPI_GQL_CLIENT = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
});

const QUERY = gql`
  query samplePokeAPIquery {
    # Gets all the pokemon belonging to generation 3
    gen3_species: pokemon_v2_pokemonspecies(
      where: {pokemon_v2_generation: {name: {_eq: "generation-iii"}}}
      order_by: {id: asc}
    ) {
      name
      id
      evolves_from_species_id
    }
    # You can run multiple queries at the same time
    # Counts how many pokemon were released for each generation
    generations: pokemon_v2_generation {
      name
      pokemon_species: pokemon_v2_pokemonspecies_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

function GraphqlExample(props: Props) {
  const {data} = useQuery(QUERY);
  console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`T O D O`}</Text>
    </View>
  );
}

function ApolloWrapper(props: Props) {
  return (
    <ApolloProvider client={POKEAPI_GQL_CLIENT}>
      <GraphqlExample {...props} />
    </ApolloProvider>
  );
}

export default ApolloWrapper;
