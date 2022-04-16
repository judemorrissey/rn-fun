import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParams} from 'screens/types';

import * as React from 'react';
import {useCallback} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from 'components/Button';

import styles from './styles';

type HomeScreenProp = NativeStackNavigationProp<RootStackParams, 'Home'>;

function Home() {
  const navigation = useNavigation<HomeScreenProp>();

  const onPressJude = useCallback(() => {
    navigation.navigate('JudeHome');
  }, [navigation]);

  const onPressVeronica = useCallback(() => {
    navigation.navigate('VeronicaHome');
  }, [navigation]);

  const onPressMatthew = useCallback(() => {
    navigation.navigate('MatthewHome');
  }, [navigation]);

  const onPressKen = useCallback(() => {
    navigation.navigate('KenHome');
  }, [navigation]);

  const onPressSema = useCallback(() => {
    navigation.navigate('SemaHome');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Hello you are home`}</Text>
      <Button onPress={onPressJude} style={styles.button} title="Jude" />
      <Button
        onPress={onPressVeronica}
        style={styles.button}
        title="Veronica"
      />
      <Button onPress={onPressMatthew} style={styles.button} title="Matthew" />
      <Button onPress={onPressKen} style={styles.button} title="Ken" />
      <Button onPress={onPressSema} style={styles.button} title="Sema"/>
    </View>
  );
}

export default Home;
