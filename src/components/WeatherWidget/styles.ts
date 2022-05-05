import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  button: {
    container: ViewStyle;
  };
  widget: {
    bottomRow: ViewStyle;
    container: ViewStyle;
    linkText: TextStyle;
    poweredByContainer: ViewStyle;
    text: TextStyle;
    tile: ViewStyle;
    tilesContainer: ViewStyle;
  };
};

export default {
  button: StyleSheet.create<Styles['button']>({
    container: {
      margin: 8,
    },
  }),
  widget: StyleSheet.create<Styles['widget']>({
    bottomRow: {
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
      paddingHorizontal: 8,
    },
    container: {
      backgroundColor: theme.colors.backgrounds.weatherWidget.container,
      borderRadius: 16,
      paddingVertical: 12,
    },
    linkText: {
      textDecorationLine: 'underline',
    },
    poweredByContainer: {
      alignItems: 'flex-end',
    },
    text: {
      color: theme.colors.text.importance.veryHigh,
    },
    tile: {
      marginRight: 8,
    },
    tilesContainer: {
      paddingHorizontal: 12,
    },
  }),
};
