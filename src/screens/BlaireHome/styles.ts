import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

type Styles = {
  container: ViewStyle;
  text: TextStyle;
};

export default StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    backgroundColor: 'beige',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'orange',
    fontSize: 30,
  },
});
