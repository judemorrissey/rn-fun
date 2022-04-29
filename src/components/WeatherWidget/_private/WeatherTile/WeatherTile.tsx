import type {StyleProp, ViewStyle} from 'react-native';
import type {WeatherDatum} from 'components/WeatherWidget/types';

import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import styles from './styles';

type Props = {
  datum: WeatherDatum;
  style?: StyleProp<ViewStyle>;
};

function WeatherTile(props: Props) {
  const {datum, style} = props;

  return (
    <View style={StyleSheet.compose(styles.container, style)}>
      <Image
        source={{
          uri: `https://www.metaweather.com/static/img/weather/png/${datum.weather_state_abbr}.png`,
        }}
        style={styles.weatherImage}
      />
      <Text style={styles.text}>
        {`Temperature: ${Math.round(datum.the_temp)} °C`}
      </Text>
      <Text style={styles.text}>
        {`High: ${Math.round(datum.max_temp)} °C`}
      </Text>
      <Text style={styles.text}>{`Low: ${Math.round(datum.min_temp)} °C`}</Text>
      <Text style={styles.text}>{`Wind: ${
        datum.wind_direction_compass
      } ${Math.round(datum.wind_speed)}mph`}</Text>
    </View>
  );
}

export default WeatherTile;
