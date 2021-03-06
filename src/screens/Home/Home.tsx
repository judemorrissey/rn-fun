import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParams} from 'screens/types';

import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {spongebob} from 'lib/utils';

import Button from 'components/Button';
import WeatherWidget from 'components/WeatherWidget';

import styles from './styles';

type HomeScreenProp = NativeStackNavigationProp<RootStackParams, 'Home'>;

const HEADER_TEXT = 'Hello you are home';

function Home() {
  const navigation = useNavigation<HomeScreenProp>();

  const [headerText, setHeaderText] = useState<string>(spongebob(HEADER_TEXT));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeaderText(spongebob(HEADER_TEXT));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

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

  const onPressBlaire = useCallback(() => {
    navigation.navigate('BlaireHome');
  }, [navigation]);

  const onPressGraphql = useCallback(() => {
    navigation.navigate('GraphqlExample');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <WeatherWidget style={styles.weatherWidget} />
      <Text style={styles.headerText}>{headerText}</Text>
      <Button onPress={onPressJude} style={styles.button} title="Jude" />
      <Button
        onPress={onPressVeronica}
        style={styles.button}
        title="Veronica"
      />
      <Button onPress={onPressMatthew} style={styles.button} title="Matthew" />
      <Button onPress={onPressKen} style={styles.button} title="Ken" />
      <Button onPress={onPressSema} style={styles.button} title="Sema" />
      <Button onPress={onPressBlaire} style={styles.button} title="Blaire" />
      <Button onPress={onPressGraphql} style={styles.button} title="GraphQL" />
    </ScrollView>
  );
}

export default Home;
