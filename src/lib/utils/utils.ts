// utility functions and the like should go here

import Prando from 'prando';

const utils = {
  convertCelsiusToFahrenheit: function (celsius: number): number {
    // semamamama please fill this in
    return (celsius * 9) / 5 + 32;
  },

  convertFahrenheitToCelsius: function (fahrenheit: number): number {
    // semamamama please fill this in
    return ((fahrenheit - 32) * 5) / 9;
  },

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

  isAllLetters: function (str: string): boolean {
    return str
      .split('')
      .every((char) => char.toLowerCase() !== char.toUpperCase());
  },

  isLowerCaseAlphabetical: function (str: string): boolean {
    return (
      utils.isAllLetters(str) &&
      str === str.toLowerCase() &&
      str !== str.toUpperCase()
    );
  },

  isUpperCaseAlphabetical: function (str: string): boolean {
    return (
      utils.isAllLetters(str) &&
      str === str.toUpperCase() &&
      str !== str.toLowerCase()
    );
  },

  // returns a number within the range [min, max)
  randomNumberFromRange: function (min: number, max: number): number {
    const difference = max - min;
    const randomWithinDifference = Math.random() * difference;
    return min + randomWithinDifference;
  },

  spongebob: function (text: string, deterministic: boolean = false): string {
    let randomFunc = Math.random;
    if (deterministic) {
      const rng = new Prando(text);
      randomFunc = () => rng.next();
    }
    return text
      .split('')
      .map((char) =>
        char.slice()[randomFunc() > 0.5 ? 'toUpperCase' : 'toLowerCase'](),
      )
      .join('');
  },
};

export default utils;
