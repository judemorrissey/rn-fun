import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import TriplePressButton from './';

it('renders correctly', () => {
  render(<TriplePressButton />);
});

it('executes the onPress callback on the third press within a threshold', () => {
  const mockOnPress = jest.fn();
  const {getByTestId} = render(<TriplePressButton onPress={mockOnPress} />);
  const button = getByTestId('button');

  fireEvent.press(button);
  fireEvent.press(button);
  fireEvent.press(button);
  expect(mockOnPress).toBeCalledTimes(1);
});
