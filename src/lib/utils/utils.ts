// utility functions and the like should go here

import Prando from 'prando';

export const capitalize = function (str: string): string {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
};

export const convertCelsiusToFahrenheit = function (celsius: number): number {
  return (celsius * 9) / 5 + 32;
};

export const convertFahrenheitToCelsius = function (
  fahrenheit: number,
): number {
  return ((fahrenheit - 32) * 5) / 9;
};

export const isAllLetters = function (str: string): boolean {
  return str
    .split('')
    .every((char) => char.toLowerCase() !== char.toUpperCase());
};

export const isLowerCaseAlphabetical = function (str: string): boolean {
  return (
    isAllLetters(str) && str === str.toLowerCase() && str !== str.toUpperCase()
  );
};

export const isUpperCaseAlphabetical = function (str: string): boolean {
  return (
    isAllLetters(str) && str === str.toUpperCase() && str !== str.toLowerCase()
  );
};

export const countLowerCase = function (str: string): number {
  return str
    .split('')
    .reduce(
      (currentCount, char) =>
        currentCount + (isLowerCaseAlphabetical(char) ? 1 : 0),
      0,
    );
};

export const countUpperCase = function (str: string): number {
  return str
    .split('')
    .reduce(
      (currentCount, char) =>
        currentCount + (isUpperCaseAlphabetical(char) ? 1 : 0),
      0,
    );
};

export const spongebob = function (
  text: string,
  deterministic: boolean = false,
): string {
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
};
