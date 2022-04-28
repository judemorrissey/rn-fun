// super useful color sourcing tool: https://chir.ag/projects/name-that-color
const palette = {
  // shades of gray
  blueGray: '#434C59',
  gray: '#808080',
  greenGray: '#465945',

  // darker shades
  darkBlue: '#384555',
  darkGreen: '#3F583B',

  // other colors
  black: '#000000',
  purple: '#660099',
  white: '#FFFFFF',
} as const;

export default {
  backgrounds: {
    button: palette.purple,
    characterTile: {
      default: palette.blueGray,
    },
    weatherWidget: palette.blueGray,
  },

  text: {
    importance: {
      veryHigh: palette.white,
    },
  },
};
