import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: 'steelblue',
    flex: 1,
  },
  text: {
    color: theme.colors.text.importance.veryHigh,
  },
});
