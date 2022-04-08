import * as React from 'react';
import {Pressable, StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import styles from './styles';

type Props = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  title?: string;
};

function Button(props: Props) {
  const {onPress, style, title = ''} = props;

  return (
    <Pressable
      onPress={onPress}
      style={StyleSheet.compose(styles.container, style)}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export default Button;
