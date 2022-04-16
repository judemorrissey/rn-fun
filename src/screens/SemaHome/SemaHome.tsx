import * as React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

type Props = {};

function SemaHome(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Hello Friends`}</Text>
      <Text style={styles.text}>{`I'm new`}</Text>
    </View>
  );
}

export default SemaHome;
