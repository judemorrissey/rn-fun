import utils from './utils';

describe('upper and lower case utils', () => {
  const alphabetLower = 'abcdefghijklmnopqrstuvwxyzåéæüøñôï';
  const alphabetUpper = alphabetLower.toUpperCase();
  const notAlphabetical = '!@#$%^&*(){}:"<>?=+-1234567890-=,./;\'"{}[]\\|';

  describe('utils#isAlphabetical', () => {
    it('works on single characters', () => {
      for (const char of alphabetLower.split('')) {
        expect(utils.isAlphabetical(char)).toStrictEqual(true);
      }
      for (const char of alphabetUpper.split('')) {
        expect(utils.isAlphabetical(char)).toStrictEqual(true);
      }
      for (const char of notAlphabetical.split('')) {
        expect(utils.isAlphabetical(char)).toStrictEqual(false);
      }
    });

    it('works on multiple character strings', () => {
      expect(utils.isAlphabetical(alphabetLower)).toStrictEqual(true);
      expect(utils.isAlphabetical(alphabetUpper)).toStrictEqual(true);
      expect(utils.isAlphabetical(notAlphabetical)).toStrictEqual(false);
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
    });
  });
});

describe('text transformations', () => {
  describe('utils#spongebob', () => {
    it('mAkEs mOcKiNG StRiNGs', () => {
      const texts = [
        'this is all lowercase',
        'THIS IS ALL CAPS',
        'This Is A Bit Psycho',
        'tHIS iS tHREATENING',
      ];
      for (const text of texts) {
        const spongebobbed = utils.spongebob(text);
        const countLowerOriginal = utils.countLowerCase(text);
        const countLowerSpongebobbed = utils.countLowerCase(spongebobbed);
        const countUpperOriginal = utils.countUpperCase(text);
        const countUpperSpongebobbed = utils.countUpperCase(spongebobbed);

        expect(spongebobbed).toHaveLength(text.length);
        expect(spongebobbed.toLowerCase()).toStrictEqual(text.toLowerCase());
        expect(spongebobbed.toUpperCase()).toStrictEqual(text.toUpperCase());

        // TODO: there's a small chance that the following could be flaky
        expect(text).not.toStrictEqual(spongebobbed);
        expect(countLowerOriginal).not.toStrictEqual(countLowerSpongebobbed);
        expect(countUpperOriginal).not.toStrictEqual(countUpperSpongebobbed);
      }
    });
  });
});
