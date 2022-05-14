import type {TextStyle, ViewStyle} from 'react-native';

import {StyleSheet} from 'react-native';

type Styles = {
  container: ViewStyle;
  text: TextStyle;
  button: ViewStyle;
};

export default StyleSheet.create<Styles>({
  button: {
    marginBottom: 20,
    marginTop: 20,
  },
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
