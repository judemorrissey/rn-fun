// see also: https://docs.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass
const fontWeights = {
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

export default fontWeights;
