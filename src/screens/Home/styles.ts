import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  button: ViewStyle;
  container: ViewStyle;
  text: TextStyle;
};

export default StyleSheet.create<Styles>({
  button: {
    marginVertical: 8,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'steelblue',
    flex: 1,
  },
  text: {
    color: theme.colors.text.importance.veryHigh,
  },
});
