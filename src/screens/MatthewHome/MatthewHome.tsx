import * as React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

type Props = {};

function MatthewHome(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`M A T T H E W`}</Text>
    </View>
  );
}

export default MatthewHome;
