import * as React from 'react';
import {render} from '@testing-library/react-native';

import WeatherTile from './';

it('renders correctly', () => {
  const datum = {
    air_pressure: 5,
    applicable_date: new Date(),
    created: new Date(),
    humidity: 5,
    id: 5,
    max_temp: 5,
    min_temp: 5,
    predictability: 5,
    the_temp: 5,
    visibility: 5,
    weather_state_abbr: 'c',
    weather_state_name: 'Clear',
    wind_direction: 5,
    wind_direction_compass: 'NE',
    wind_speed: 5,
  };
  render(<WeatherTile datum={datum} />);
});
