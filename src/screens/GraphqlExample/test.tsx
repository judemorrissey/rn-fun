import type {MockedResponse} from '@apollo/client/testing';

import * as React from 'react';
import {render} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';

import {GraphqlExample} from './GraphqlExample';

const mocks: MockedResponse[] = [];

it('renders correctly', () => {
  render(
    <MockedProvider addTypename={false} mocks={mocks}>
      <GraphqlExample />
    </MockedProvider>,
  );
});
