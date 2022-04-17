import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Button from '.';

it('renders correctly', () => {
  render(<Button />);
});

it('executes the onPress callback function when pressed', () => {
  const mockOnPress = jest.fn();
  const {getByTestId} = render(<Button onPress={mockOnPress} />);
  const button = getByTestId('button');

  fireEvent.press(button);

  expect(mockOnPress).toHaveBeenCalled();

  fireEvent.press(button);
  expect(mockOnPress).toHaveBeenCalledTimes(2);
});
