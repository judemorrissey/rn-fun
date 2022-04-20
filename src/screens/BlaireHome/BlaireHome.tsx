import * as React from 'react';
import {useCallback} from 'react';
import {Linking, Text, View} from 'react-native';
import Button from 'components/Button';

import styles from './styles';

type Props = {};

function BlaireHome(props: Props) {
  const onPress = useCallback(() => {
    Linking.openURL('https://dintaifungusa.com/');
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`B L A I R E`}</Text>
      <Button onPress={onPress} title="Press me" />
    </View>
  );
}

export default BlaireHome;
