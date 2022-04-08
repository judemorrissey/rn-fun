import * as React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

type Props = {};

function JudeHome(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`J U D E`}</Text>
    </View>
  );
}

export default JudeHome;
