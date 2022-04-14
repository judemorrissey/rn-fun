import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'react-native',
  rootDir: '../../',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './src/jest/setup.ts',
  ],
  verbose: true,
};

export default config;
