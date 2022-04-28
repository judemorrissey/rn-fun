import type {ViewStyle} from 'react-native';

import * as React from 'react';
import {useCallback, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from 'components/Button';

import styles from './styles';

type WeatherDatum = {
  air_pressure: number;
  applicable_date: Date;
  created: Date;
  humidity: number;
  id: number;
  max_temp: number;
  min_temp: number;
  predictability: number;
  the_temp: number;
  visibility: number;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_direction: number;
  wind_direction_compass: string;
  wind_speed: number;
};

type Props = {
  buttonStyle?: ViewStyle;
  style?: ViewStyle;
  widgetStyle?: ViewStyle;
};

function WeatherWidget(props: Props) {
  const {buttonStyle, style, widgetStyle} = props;

  const [isRequestInFlight, setIsRequestInFlight] = useState(false);
  const [weatherData, setWeatherData] = useState<JSON | null>(null);

  const onPressGetWeather = useCallback(async () => {
    setIsRequestInFlight(true);
    try {
      const response = await fetch(
        'https://www.metaweather.com/api/location/2487956/',
      );
      const json = await response.json();
      setWeatherData(json);
    } catch (err: unknown) {
      let message = '';
      if (typeof err === 'string') {
        message = err;
      } else if (err instanceof Error) {
        message = err.message;
      }
      Alert.alert(`Error getting weather! ${message}`);
    } finally {
      setIsRequestInFlight(false);
    }
  }, []);

  const onPressPoweredBy = useCallback(() => {
    const metaWeatherUrl = 'https://www.metaweather.com';
    const canOpen = Linking.canOpenURL(metaWeatherUrl);
    if (!canOpen) {
      return; // TODO: handle this?
    }
    Linking.openURL(metaWeatherUrl);
  }, []);

  const keyExtractor = useCallback((item, index) => {
    return item.id;
  }, []);

  const renderWeatherItem = useCallback(({item, index}) => {
    return (
      <View>
        <Text style={styles.widget.text}>{JSON.stringify(item, null, 2)}</Text>
      </View>
    );
  }, []);

  const mainContent = useMemo(() => {
    if (isRequestInFlight) {
      return <ActivityIndicator />;
    }
    if (weatherData == null) {
      return (
        <View style={StyleSheet.compose(styles.button.container, buttonStyle)}>
          <Button
            onPress={onPressGetWeather}
            title="What's the weather in San Francisco?"
          />
        </View>
      );
    }
    return (
      <View style={StyleSheet.compose(styles.widget.container, widgetStyle)}>
        <FlatList
          data={weatherData.consolidated_weather}
          horizontal={true}
          keyExtractor={keyExtractor}
          renderItem={renderWeatherItem}
        />
        <View style={styles.widget.poweredByContainer}>
          <Text style={styles.widget.text}>
            <Text>{`Powered by `}</Text>
            <Text
              onPress={onPressPoweredBy}
              style={styles.widget.linkText}>{`MetaWeather`}</Text>
          </Text>
        </View>
      </View>
    );
  }, [
    buttonStyle,
    isRequestInFlight,
    keyExtractor,
    onPressGetWeather,
    onPressPoweredBy,
    renderWeatherItem,
    weatherData,
    widgetStyle,
  ]);

  return <View style={style}>{mainContent}</View>;
}

export default WeatherWidget;
