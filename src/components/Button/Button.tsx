import * as React from 'react';

import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Pressable, StyleSheet, Text} from 'react-native';

import styles from './styles';

type Props = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
};

function Button(props: Props) {
  const {onPress, style, title = '', titleStyle} = props;

  return (
    <Pressable
      onPress={onPress}
      style={StyleSheet.compose(styles.container, style)}
      testID="button">
      <Text style={StyleSheet.compose(styles.text, titleStyle)}>{title}</Text>
    </Pressable>
  );
}

export default Button;
