import * as React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

type Props = {};

function VeronicaHome(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`V R N C V`}</Text>
    </View>
  );
}

export default VeronicaHome;
