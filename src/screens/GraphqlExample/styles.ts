import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  container: ViewStyle;
  contentContainer: ViewStyle;
  heading: TextStyle;
  itemContainer: ViewStyle;
  itemSeparator: ViewStyle;
  label: TextStyle;
  text: TextStyle;
};

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 8,
  },
  heading: {
    ...theme.fonts[20],
    color: theme.colors.text.importance.veryHigh,
    fontWeight: theme.fontWeights.semiBold,
  },
  itemContainer: {
    backgroundColor: theme.colors.backgrounds.pokemonTile,
    borderRadius: 8,
    padding: 8,
  },
  itemSeparator: {
    marginTop: 8,
  },
  label: {
    ...theme.fonts[14],
    color: theme.colors.text.importance.veryHigh,
    fontWeight: theme.fontWeights.semiBold,
  },
  text: {
    ...theme.fonts[14],
    color: theme.colors.text.importance.veryHigh,
  },
});
