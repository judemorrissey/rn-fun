import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type Props = {
  title?: string;
};

function Button(props: Props) {
  const {title = ''} = props;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

export default Button;
