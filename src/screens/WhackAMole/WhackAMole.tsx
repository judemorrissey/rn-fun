import * as React from 'react';
import {FlatList, View} from 'react-native';

import Mole from './_private/Mole';

import styles from './styles';

type Props = {};

function WhackAMole(props: Props) {
  return (
    <View style={styles.container}>
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
    </View>
  );
}

export default WhackAMole;
