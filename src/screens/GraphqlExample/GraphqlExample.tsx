import type {ListRenderItem} from 'react-native';
import type {PokemonQuery} from './gql';

import * as React from 'react';
import {useCallback} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useQuery} from '@apollo/client';

import utils from 'lib/utils';

import {ALL_POKEMON_QUERY} from './gql';
import styles from './styles';

type Props = {};

function ItemSeparator() {
  return <View style={styles.itemSeparator} />;
}

export function GraphqlExample(props: Props) {
  const {data, loading} = useQuery<PokemonQuery>(ALL_POKEMON_QUERY);

  const keyExtractor = useCallback((item, index) => {
    return String(item.id);
  }, []);

  const renderItem: ListRenderItem<PokemonQuery['all_pokemon'][number]> =
    useCallback(({item}) => {
      return (
        <View style={styles.itemContainer}>
          <Text style={styles.heading}>{utils.capitalize(item.name)}</Text>
          <Text>
            <Text style={styles.label}>{`National Dex #: `}</Text>
            <Text style={styles.text}>{item.id}</Text>
          </Text>
          <Text>
            <Text style={styles.label}>{`Evolution Chain: `}</Text>
            <Text style={styles.text}>
              {item.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies
                .map((pokemon) => utils.capitalize(pokemon.name))
                .join(' -> ')}
            </Text>
          </Text>
        </View>
      );
    }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          ItemSeparatorComponent={ItemSeparator}
          contentContainerStyle={styles.contentContainer}
          data={data?.all_pokemon ?? []}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

export default GraphqlExample;
