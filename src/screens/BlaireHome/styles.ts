import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  container: ViewStyle;
  text: TextStyle;
  gameContainer: ViewStyle;
};

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  gameContainer: {
    backgroundColor: 'beige',
    borderWidth: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    color: theme.colors.text.importance.veryHigh,
  },
});
