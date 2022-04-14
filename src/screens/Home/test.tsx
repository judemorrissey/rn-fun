import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';

import Home from './';

it('renders correctly', () => {
  render(
    <NavigationContainer>
      <Home />
    </NavigationContainer>,
  );
});
