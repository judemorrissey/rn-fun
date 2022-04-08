import * as React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

type Props = {};

function KenHome(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`K E N N E T H`}</Text>
    </View>
  );
}

export default KenHome;
