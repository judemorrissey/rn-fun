import * as React from 'react';
import {useCallback} from 'react';
import {Alert, Text, View} from 'react-native';

import TriplePressButton from 'components/TriplePressButton';

import styles from './styles';

type Props = {};

function JudeHome(props: Props) {
  const onPressTriple = useCallback(() => {
    Alert.alert('Triple Press!', 'Veronica I hope you see this :)');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`J U D E`}</Text>
      <TriplePressButton onPress={onPressTriple} title="Triple Press Me!" />
    </View>
  );
}

export default JudeHome;
