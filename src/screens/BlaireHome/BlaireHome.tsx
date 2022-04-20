import * as React from 'react';
import {Linking, Text, View} from 'react-native';
import Button from 'components/Button';

import styles from './styles';

type Props = {};

function BlaireHome(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`B L A I R E`}</Text>
      <Button
        onPress={() => Linking.openURL('https://dintaifungusa.com/')}
        title="Press me"
      />
    </View>
  );
}

export default BlaireHome;
