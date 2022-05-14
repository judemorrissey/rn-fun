import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  container: ViewStyle;
  text: TextStyle;
};

export default StyleSheet.create<Styles>({
  container: {},
  text: {
    color: theme.colors.text.importance.veryHigh,
  },
});
