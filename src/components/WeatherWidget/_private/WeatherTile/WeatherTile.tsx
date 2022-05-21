import type {StyleProp, ViewStyle} from 'react-native';
import type {WeatherDatum} from 'components/WeatherWidget/types';

import * as React from 'react';
import {useCallback, useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {convertCelsiusToFahrenheit} from 'lib/utils';

import styles from './styles';

type Props = {
  datum: WeatherDatum;
  isCelsius?: boolean;
  style?: StyleProp<ViewStyle>;
};

function WeatherTile(props: Props) {
  const {datum, isCelsius = false, style} = props;

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

  const getTemperatureString = useCallback(
    (tempInC: number) => {
      if (isCelsius) {
        return `${Math.round(tempInC)} °C`;
      }
      return `${Math.round(convertCelsiusToFahrenheit(tempInC))} °F`;
    },
    [isCelsius],
  );

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
        {`Temperature: ${getTemperatureString(datum.the_temp)}`}
      </Text>
      <Text style={styles.detailsText}>
        {`High: ${getTemperatureString(datum.max_temp)}`}
      </Text>
      <Text style={styles.detailsText}>{`Low: ${getTemperatureString(
        datum.min_temp,
      )}`}</Text>
      <Text style={styles.detailsText}>{`Wind: ${
        datum.wind_direction_compass
      } ${Math.round(datum.wind_speed)}mph`}</Text>
    </View>
  );
}

export default WeatherTile;
