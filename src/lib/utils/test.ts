import crypto from 'crypto';

import utils from './utils';

describe('upper and lower case utils', () => {
  const alphabetLower = 'abcdefghijklmnopqrstuvwxyzåéæüøñôï';
  const alphabetUpper = alphabetLower.toUpperCase();
  const notAlphabetical = '!@#$%^&*(){}:"<>?=+-1234567890-=,./;\'"{}[]\\|';
  const minLength = Math.min(
    alphabetLower.length,
    alphabetUpper.length,
    notAlphabetical.length,
  );
  let chaos = '';
  for (let i = 0; i < minLength; ++i) {
    chaos += alphabetLower[i];
    chaos += alphabetUpper[i];
    chaos += notAlphabetical[i];
  }
  chaos += alphabetLower.slice(minLength);
  chaos += alphabetUpper.slice(minLength);
  chaos += notAlphabetical.slice(minLength);

  describe('utils#isAllLetters', () => {
    it('works on single characters', () => {
      for (const char of alphabetLower.split('')) {
        expect(utils.isAllLetters(char)).toStrictEqual(true);
      }
      for (const char of alphabetUpper.split('')) {
        expect(utils.isAllLetters(char)).toStrictEqual(true);
      }
      for (const char of notAlphabetical.split('')) {
        expect(utils.isAllLetters(char)).toStrictEqual(false);
      }
    });

    it('works on multiple character strings', () => {
      expect(utils.isAllLetters(alphabetLower)).toStrictEqual(true);
      expect(utils.isAllLetters(alphabetUpper)).toStrictEqual(true);
      expect(utils.isAllLetters(notAlphabetical)).toStrictEqual(false);
      expect(utils.isAllLetters(chaos)).toStrictEqual(false);
    });
  });

  describe('utils#isLowerCaseAlphabetical', () => {
    it('works on single characters', () => {
      for (const char of alphabetLower.split('')) {
        expect(utils.isLowerCaseAlphabetical(char)).toStrictEqual(true);
      }
      for (const char of alphabetUpper.split('')) {
        expect(utils.isLowerCaseAlphabetical(char)).toStrictEqual(false);
      }
      for (const char of notAlphabetical.split('')) {
        expect(utils.isLowerCaseAlphabetical(char)).toStrictEqual(false);
      }
    });

    it('works on multiple character strings', () => {
      expect(utils.isLowerCaseAlphabetical(alphabetLower)).toStrictEqual(true);
      expect(utils.isLowerCaseAlphabetical(alphabetUpper)).toStrictEqual(false);
      expect(utils.isLowerCaseAlphabetical(notAlphabetical)).toStrictEqual(
        false,
      );
      expect(utils.isLowerCaseAlphabetical(chaos)).toStrictEqual(false);
    });
  });

  describe('utils#isUpperCaseAlphabetical', () => {
    it('works on single characters', () => {
      for (const char of alphabetUpper.split('')) {
        expect(utils.isUpperCaseAlphabetical(char)).toStrictEqual(true);
      }
      for (const char of alphabetLower.split('')) {
        expect(utils.isUpperCaseAlphabetical(char)).toStrictEqual(false);
      }
      for (const char of notAlphabetical.split('')) {
        expect(utils.isUpperCaseAlphabetical(char)).toStrictEqual(false);
      }
    });

    it('works on multiple character strings', () => {
      expect(utils.isUpperCaseAlphabetical(alphabetUpper)).toStrictEqual(true);
      expect(utils.isUpperCaseAlphabetical(alphabetLower)).toStrictEqual(false);
      expect(utils.isUpperCaseAlphabetical(notAlphabetical)).toStrictEqual(
        false,
      );
      expect(utils.isUpperCaseAlphabetical(chaos)).toStrictEqual(false);
    });
  });

  describe('utils#countLowerCase', () => {
    it('works on single characters', () => {
      for (const char of alphabetLower.split('')) {
        expect(utils.countLowerCase(char)).toStrictEqual(1);
      }
      for (const char of alphabetUpper.split('')) {
        expect(utils.countLowerCase(char)).toStrictEqual(0);
      }
      for (const char of notAlphabetical.split('')) {
        expect(utils.countLowerCase(char)).toStrictEqual(0);
      }
    });

    it('works on multiple character strings', () => {
      expect(utils.countLowerCase(alphabetLower)).toStrictEqual(
        alphabetLower.length,
      );
      expect(utils.countLowerCase(alphabetUpper)).toStrictEqual(0);
      expect(utils.countLowerCase(notAlphabetical)).toStrictEqual(0);
      expect(utils.countLowerCase(chaos)).toStrictEqual(alphabetLower.length);
    });
  });

  describe('utils#countUpperCase', () => {
    it('works on single characters', () => {
      for (const char of alphabetUpper.split('')) {
        expect(utils.countUpperCase(char)).toStrictEqual(1);
      }
      for (const char of alphabetLower.split('')) {
        expect(utils.countUpperCase(char)).toStrictEqual(0);
      }
      for (const char of notAlphabetical.split('')) {
        expect(utils.countUpperCase(char)).toStrictEqual(0);
      }
    });

    it('works on multiple character strings', () => {
      expect(utils.countUpperCase(alphabetUpper)).toStrictEqual(
        alphabetUpper.length,
      );
      expect(utils.countUpperCase(alphabetLower)).toStrictEqual(0);
      expect(utils.countUpperCase(notAlphabetical)).toStrictEqual(0);
      expect(utils.countUpperCase(chaos)).toStrictEqual(alphabetUpper.length);
    });
  });
});

describe('text transformations', () => {
  describe('utils#spongebob', () => {
    const texts = [
      'this is all lowercase',
      'THIS IS ALL CAPS',
      'This Is A Bit Psycho',
      'tHIS iS tHREATENING',
    ];

    it('mAkEs mOcKiNG StRiNGs', () => {
      for (const text of texts) {
        const spongebobbed = utils.spongebob(text);
        expect(spongebobbed).toHaveLength(text.length);
        expect(spongebobbed.toLowerCase()).toStrictEqual(text.toLowerCase());
        expect(spongebobbed.toUpperCase()).toStrictEqual(text.toUpperCase());

        // TODO: there's a VERY small chance this could be flaky if the string ends up the same
        const originalHash = crypto
          .createHash('sha256')
          .update(text)
          .digest('hex');
        const spongebobHash = crypto
          .createHash('sha256')
          .update(spongebobbed)
          .digest('hex');
        expect(spongebobHash).not.toStrictEqual(originalHash);
      }
    });

    it('mAkEs dEtErMinIsTiC MocKeRY', () => {
      for (const text of texts) {
        // TODO: there's a VERY small chance this could be flaky if the string ends up the same
        const deterministicMockery = utils.spongebob(text, true);
        expect(text).not.toStrictEqual(deterministicMockery);
        for (let i = 0; i < 5; ++i) {
          expect(utils.spongebob(text, true)).toStrictEqual(
            deterministicMockery,
          );
        }
      }
    });
  });

  describe('unit conversions', () => {
    const celciusFahrenheitTuples: [number, number][] = [
      [0, 32], // freezing point of water
      [100, 212], // boiling point of water
      [24, 75], // room temperature (Jude approved™)
    ];

    describe('utils#convertCelsiusToFahrenheit', () => {
      it('converts from celsius to fahrenheit', () => {
        for (const [celsius, fahrenheit] of celciusFahrenheitTuples) {
          const converted = Math.round(
            utils.convertCelsiusToFahrenheit(celsius),
          );
          expect(converted).toStrictEqual(fahrenheit);
        }
      });
    });

    describe('utils#convertFahrenheitToCelsius', () => {
      it('converts from fahrenheit to celsius', () => {
        for (const [celsius, fahrenheit] of celciusFahrenheitTuples) {
          const converted = Math.round(
            utils.convertFahrenheitToCelsius(fahrenheit),
          );
          expect(converted).toStrictEqual(celsius);
        }
      });
    });
  });
});
