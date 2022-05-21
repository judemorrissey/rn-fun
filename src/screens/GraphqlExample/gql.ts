import {gql} from '@apollo/client';

// see the wonderful PokeAPI GraphiQL at https://beta.pokeapi.co/graphql/console/
// PokeAPI Github page can be found at https://github.com/PokeAPI/pokeapi
export const ALL_POKEMON_QUERY = gql`
  query AllPokemonQuery {
    all_pokemon: pokemon_v2_pokemonspecies(order_by: {id: asc}) {
      id
      name
      evolves_from_species_id
      pokemon_v2_evolutionchain {
        pokemon_v2_pokemonspecies {
          id
          name
        }
        pokemon_v2_pokemonspecies_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`;

// TODO: generate these?
export type Pokemon = {
  evolves_from_species_id: number;
  id: number;
  name: string;
  pokemon_v2_evolutionchain: {
    pokemon_v2_pokemonspecies: Pokemon[];
  };
  pokemon_v2_pokemonspecies_aggregate: {
    aggregate: {
      count: number;
    };
  };
};

export type PokemonQuery = {
  all_pokemon: Pokemon[];
};
