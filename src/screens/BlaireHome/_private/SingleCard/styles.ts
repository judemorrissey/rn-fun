import type {ImageStyle, TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  container: ViewStyle;
  text: TextStyle;
  card: ViewStyle;
  image: ImageStyle;
  unflipped: ImageStyle;
  flipped: ImageStyle;
};

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  text: {
    color: theme.colors.text.importance.veryHigh,
  },
  image: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  card: {
    position: 'relative',
  },
  unflipped: {
    transform: [{rotateY: '90deg'}],
    // position: 'absolute',
    display: 'none',
  },
  flipped: {
    transform: [{rotateY: '0deg'}],
  },
});
