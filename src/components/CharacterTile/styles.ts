import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  container: ViewStyle;
  character: TextStyle;
};

const TILE_SIZE = 48;

export default StyleSheet.create<Styles>({
  character: {
    color: theme.colors.text.importance.veryHigh,
    fontSize: 32,
    fontWeight: theme.fontWeights.bold,
  },
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.backgrounds.characterTile.default,
    height: TILE_SIZE,
    justifyContent: 'center',
    margin: 4,
    width: TILE_SIZE,
  },
});
