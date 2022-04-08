import * as React from 'react';
import {useCallback} from 'react';
import {Alert, Text, View} from 'react-native';

import Button from 'components/Button';

import styles from './styles';

type Props = {};

function Home(props: Props) {
  const onPress = useCallback(
    (name) => () => {
      Alert.alert(
        'You Pressed!',
        `Yep, this should take you to ${name}'s screen, but it's not implemented yet.`,
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Hello you are home`}</Text>
      <Button onPress={onPress('Jude')} style={styles.button} title="Jude" />
      <Button
        onPress={onPress('Veronica')}
        style={styles.button}
        title="Veronica"
      />
      <Button
        onPress={onPress('Matthew')}
        style={styles.button}
        title="Matthew"
      />
      <Button onPress={onPress('Ken')} style={styles.button} title="Ken" />
    </View>
  );
}

export default Home;
