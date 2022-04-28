import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  boardContainer: ViewStyle;
  container: ViewStyle;
  rowContainer: ViewStyle;
  text: TextStyle;
};

export default StyleSheet.create<Styles>({
  boardContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  text: {
    color: theme.colors.text.importance.veryHigh,
  },
});
