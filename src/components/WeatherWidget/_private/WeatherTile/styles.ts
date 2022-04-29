import type {ImageStyle, TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  container: ViewStyle;
  dayText: TextStyle;
  detailsLabelText: TextStyle;
  detailsText: TextStyle;
  weatherImage: ImageStyle;
};

export default StyleSheet.create<Styles>({
  container: {
    backgroundColor: theme.colors.backgrounds.weatherWidget.tile,
    borderRadius: 16,
    margin: 4,
    padding: 12,
  },
  dayText: {
    ...theme.fonts[20],
    color: theme.colors.text.importance.veryHigh,
    fontWeight: theme.fontWeights.semiBold,
  },
  detailsLabelText: {
    ...theme.fonts[14],
    color: theme.colors.text.importance.veryHigh,
    fontWeight: theme.fontWeights.semiBold,
  },
  detailsText: {
    ...theme.fonts[14],
    color: theme.colors.text.importance.veryHigh,
  },
  weatherImage: {
    height: 64,
    width: 64,
  },
});
