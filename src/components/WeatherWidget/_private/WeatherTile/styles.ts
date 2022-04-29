import type {ImageStyle, TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  container: ViewStyle;
  text: TextStyle;
  weatherImage: ImageStyle;
};

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  text: {
    color: theme.colors.text.importance.veryHigh,
  },
  weatherImage: {
    height: 64,
    width: 64,
  },
});
