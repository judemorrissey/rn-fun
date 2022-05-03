import type {ImageStyle, TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  text: TextStyle;
  card: ViewStyle;
  image: ImageStyle;
  unflipped: ImageStyle;
  flipped: ImageStyle;
};

export default StyleSheet.create<Styles>({
  card: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  flipped: {
    transform: [{rotateY: '0deg'}],
  },
  image: {
    borderColor: 'white',
    borderWidth: 1,
    height: 90,
    width: 90,
  },
  text: {
    color: theme.colors.text.importance.veryHigh,
  },
  unflipped: {
    display: 'none',
    transform: [{rotateY: '90deg'}],
  },
});
