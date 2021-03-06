import type {ListRenderItem, StyleProp, ViewStyle} from 'react-native';
import type {WeatherDatum, WeatherResponse} from './types';

import * as React from 'react';
import {useCallback, useMemo, useState} from 'react';
import {Alert, FlatList, Linking, StyleSheet, Text, View} from 'react-native';

import axios from 'axios';

import Button from 'components/Button';

import WeatherTile from './_private/WeatherTile';

import styles from './styles';

type Props = {
  buttonStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  widgetStyle?: StyleProp<ViewStyle>;
};

function WeatherWidget(props: Props) {
  const {buttonStyle, style, widgetStyle} = props;

  const [isRequestInFlight, setIsRequestInFlight] = useState(false);
  const [weatherResponse, setWeatherResponse] =
    useState<WeatherResponse | null>(null);
  const [isCelsius, setIsCelsius] = useState(false);

  const onPressGetWeather = useCallback(async () => {
    setIsRequestInFlight(true);
    try {
      const response = await axios.get(
        'https://www.metaweather.com/api/location/2487956/',
      );
      const json: WeatherResponse = await response.data;
      setWeatherResponse(json);
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

  const onPressTemperatureUnit = useCallback(() => {
    setIsCelsius((prevValue) => !prevValue);
  }, []);

  const onPressPoweredBy = useCallback(() => {
    const metaWeatherUrl = 'https://www.metaweather.com';
    const canOpen = Linking.canOpenURL(metaWeatherUrl);
    if (!canOpen) {
      return; // TODO: handle this?
    }
    Linking.openURL(metaWeatherUrl);
  }, []);

  const keyExtractor = useCallback((item: WeatherDatum) => {
    return String(item.id);
  }, []);

  const renderWeatherItem: ListRenderItem<WeatherDatum> = useCallback(
    ({item, index}) => {
      return (
        <WeatherTile
          datum={item}
          isCelsius={isCelsius}
          style={styles.widget.tile}
        />
      );
    },
    [isCelsius],
  );

  const mainContent = useMemo(() => {
    if (weatherResponse == null) {
      return (
        <View style={StyleSheet.compose(styles.button.container, buttonStyle)}>
          <Button
            onPress={onPressGetWeather}
            showActivityIndicator={isRequestInFlight}
            title="What's the weather in San Francisco?"
          />
        </View>
      );
    }
    return (
      <View style={StyleSheet.compose(styles.widget.container, widgetStyle)}>
        <FlatList
          contentContainerStyle={styles.widget.tilesContainer}
          data={weatherResponse.consolidated_weather}
          horizontal={true}
          keyExtractor={keyExtractor}
          renderItem={renderWeatherItem}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.widget.bottomRow}>
          <Button
            onPress={onPressTemperatureUnit}
            title={isCelsius ? '??C' : '??F'}
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
      </View>
    );
  }, [
    buttonStyle,
    isCelsius,
    isRequestInFlight,
    keyExtractor,
    onPressGetWeather,
    onPressPoweredBy,
    onPressTemperatureUnit,
    renderWeatherItem,
    weatherResponse,
    widgetStyle,
  ]);

  return <View style={style}>{mainContent}</View>;
}

export default WeatherWidget;
