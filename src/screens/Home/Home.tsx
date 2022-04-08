import * as React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

type Props = {};

function Home(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Hello you are home`}</Text>
    </View>
  );
}

export default Home;
