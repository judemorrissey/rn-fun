import * as React from 'react';
import {useCallback} from 'react';
import {Text, View} from 'react-native';

import Button from 'components/Button';

import styles from './styles';

type Props = {};

function Home(props: Props) {
  const {navigation} = props;
  const onPress = useCallback(
    (name) => () => {
      navigation.navigate(`${name}Home`);
    },
    [navigation],
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
