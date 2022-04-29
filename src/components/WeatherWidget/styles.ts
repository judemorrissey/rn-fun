import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  button: {
    container: ViewStyle;
  };
  widget: {
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
      marginRight: 8,
      marginTop: 8,
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
