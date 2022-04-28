import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  button: ViewStyle;
  container: ViewStyle;
  contentContainer: ViewStyle;
  headerText: TextStyle;
  weatherWidget: ViewStyle;
};

export default StyleSheet.create<Styles>({
  button: {
    marginVertical: 8,
  },
  container: {
    backgroundColor: 'steelblue',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  headerText: {
    ...theme.fonts[20],
    color: theme.colors.text.importance.veryHigh,
  },
  weatherWidget: {
    margin: 8,
  },
});
