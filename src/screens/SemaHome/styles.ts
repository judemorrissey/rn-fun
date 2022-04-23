import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  button: ViewStyle;
  buttonsContainer: ViewStyle;
  buttonsRowContainer: ViewStyle;
  container: ViewStyle;
  outputContainer: ViewStyle;
  text: TextStyle;
};

export default StyleSheet.create<Styles>({
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
  buttonsContainer: {
    flex: 1,
  },
  buttonsRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  container: {
    backgroundColor: 'steelblue',
    flex: 1,
    padding: 8,
  },
  outputContainer: {
    alignItems: 'flex-end',
    backgroundColor: '#6195ED',
    padding: 16,
  },
  text: {
    color: theme.colors.text.importance.veryHighDark,
    fontSize: 24,
  },
});
