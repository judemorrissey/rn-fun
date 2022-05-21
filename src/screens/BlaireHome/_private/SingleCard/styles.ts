import type {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import theme from 'lib/theme';

type Styles = {
  card: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
};

export default StyleSheet.create<Styles>({
  card: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
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
});
