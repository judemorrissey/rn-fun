import type {ImageStyle, TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  card: ViewStyle;
  container: ViewStyle;
  text: TextStyle;
  gameContainer: ViewStyle;
  image: ImageStyle;
};

export default StyleSheet.create<Styles>({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  image: {
    height: 50,
    width: 50,
  },
  text: {
    color: theme.colors.text.importance.veryHigh,
  },
});
