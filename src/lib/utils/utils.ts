// utility functions and the like should go here

import Prando from 'prando';

const utils = {
  capitalize: function (str: string): string {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
  },

  convertCelsiusToFahrenheit: function (celsius: number): number {
    return (celsius * 9) / 5 + 32;
  },

  convertFahrenheitToCelsius: function (fahrenheit: number): number {
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
