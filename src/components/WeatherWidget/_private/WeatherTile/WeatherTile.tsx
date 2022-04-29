import type {StyleProp, ViewStyle} from 'react-native';
import type {WeatherDatum} from 'components/WeatherWidget/types';

import * as React from 'react';
import {useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import styles from './styles';

type Props = {
  datum: WeatherDatum;
  style?: StyleProp<ViewStyle>;
};

function WeatherTile(props: Props) {
  const {datum, style} = props;

  const weatherImageUri = useMemo(() => {
    // see docs at https://www.metaweather.com/api/
    return `https://www.metaweather.com/static/img/weather/png/${datum.weather_state_abbr}.png`;
  }, [datum.weather_state_abbr]);

  const formattedDayDate = useMemo(() => {
    const date = new Date(datum.applicable_date);
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      weekday: 'short',
    }).format(date);
  }, [datum.applicable_date]);

  return (
    <View style={StyleSheet.compose(styles.container, style)}>
      <Text style={styles.dayText}>{formattedDayDate}</Text>
      <Image
        source={{
          uri: weatherImageUri,
        }}
        style={styles.weatherImage}
      />
      <Text style={styles.detailsText}>
        {`Temperature: ${Math.round(datum.the_temp)} °C`}
      </Text>
      <Text style={styles.detailsText}>
        {`High: ${Math.round(datum.max_temp)} °C`}
      </Text>
      <Text style={styles.detailsText}>{`Low: ${Math.round(
        datum.min_temp,
      )} °C`}</Text>
      <Text style={styles.detailsText}>{`Wind: ${
        datum.wind_direction_compass
      } ${Math.round(datum.wind_speed)}mph`}</Text>
    </View>
  );
}

export default WeatherTile;
