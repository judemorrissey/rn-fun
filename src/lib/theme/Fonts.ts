import type {TextStyle} from 'react-native';

// see also: https://docs.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass
export const fontWeights = {
  thin: '100',
  extraLight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  heavy: '900',
} as const;

const fonts: {[index: number]: TextStyle} = {
  '12': {
    fontSize: 12,
  },
  '14': {
    fontSize: 14,
  },
  '16': {
    fontSize: 16,
  },
  '20': {
    fontSize: 20,
  },
  '32': {
    fontSize: 32,
  },
} as const;

export default fonts;
