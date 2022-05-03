import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

import theme from 'lib/theme';

type Styles = {
  container: ViewStyle;
  text: TextStyle;
  gameContainer: ViewStyle;
  item: ViewStyle;
  width?: number;
  numCols?: number;
};

export const styles = (width?: number, numCols?: number) =>
  StyleSheet.create<Styles>({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
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
    item: {
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      height: width / numCols,
      flex: 1,
    },
  });
