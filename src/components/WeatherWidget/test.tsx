import * as React from 'react';
import {render} from '@testing-library/react-native';

import WeatherWidget from './';

it('renders correctly', () => {
  render(<WeatherWidget />);
});
