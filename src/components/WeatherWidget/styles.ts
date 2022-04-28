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
  };
};

export default <Styles>{
  button: StyleSheet.create({
    container: {
      margin: 8,
    },
  }),
  widget: StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgrounds.weatherWidget,
      borderRadius: 8,
      padding: 8,
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
  }),
};
