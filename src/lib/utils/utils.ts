// utility functions and the like should go here

const utils = {
  countLowerCase: function (str: string): number {
    return str
      .split('')
      .reduce(
        (currentCount, char) =>
          currentCount + (utils.isLowerCaseAlphabetical(char) ? 1 : 0),
        0,
      );
  },

  countUpperCase: function (str: string): number {
    return str
      .split('')
      .reduce(
        (currentCount, char) =>
          currentCount + (utils.isUpperCaseAlphabetical(char) ? 1 : 0),
        0,
      );
  },

  isAlphabetical: function (str: string): boolean {
    return str
      .split('')
      .every((char) => char.toLowerCase() !== char.toUpperCase());
  },

  isLowerCaseAlphabetical: function (str: string): boolean {
    return (
      utils.isAlphabetical(str) &&
      str === str.toLowerCase() &&
      str !== str.toUpperCase()
    );
  },

  isUpperCaseAlphabetical: function (str: string): boolean {
    return (
      utils.isAlphabetical(str) &&
      str === str.toUpperCase() &&
      str !== str.toLowerCase()
    );
  },

  spongebob: function (text: string): string {
    return text
      .split('')
      .map((char) =>
        char.slice()[Math.random() > 0.5 ? 'toUpperCase' : 'toLowerCase'](),
      )
      .join('');
  },
};

export default utils;
