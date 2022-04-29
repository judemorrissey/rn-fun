import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  activityIndicator: ViewStyle;
  container: ViewStyle;
  text: TextStyle;
};

export default StyleSheet.create<Styles>({
  activityIndicator: {
    marginRight: 4,
  },
  container: {
    backgroundColor: theme.colors.backgrounds.button,
    borderRadius: 4,
    flexDirection: 'row',
    padding: 8,
  },
  text: {
    color: theme.colors.text.importance.veryHigh,
    textAlign: 'center',
  },
});
