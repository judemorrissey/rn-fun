import crypto from 'crypto';

import Grid from './Grid';

type PrimitiveItemType = number | string | boolean;
type ItemType =
  | PrimitiveItemType
  | PrimitiveItemType[]
  | {[key: string]: PrimitiveItemType};

const getRandomInt = (includeZero: boolean) =>
  Math[includeZero ? 'floor' : 'ceil'](Math.random() * 100);

const getRandomString = () => {
  return crypto
    .randomBytes(getRandomInt(false) + 32)
    .toString('base64')
    .replace(/\//gu, ' ');
};

const getRandomBool = () => {
  return Math.random() > 0.5;
};

const getRandomPrimitiveValue = (): PrimitiveItemType => {
  const rand = Math.random();
  if (rand > 2 / 3) {
    return getRandomInt(true);
  } else if (rand > 1 / 3) {
    return getRandomString();
  }
  return getRandomBool();
};

const getRandomObject = () => {
  const numberKeyValuePairs = getRandomInt(true);
  const obj: {[key: string]: PrimitiveItemType} = {};
  for (let i = 0; i < numberKeyValuePairs; ++i) {
    obj[getRandomString()] = getRandomPrimitiveValue();
  }
  return obj;
};

const getRandomArray = () => {
  const numberElements = getRandomInt(true);
  const arr: PrimitiveItemType[] = [];
  for (let i = 0; i < numberElements; ++i) {
    arr.push(getRandomPrimitiveValue());
  }
  return arr;
};

const getRandomValueForInitialValue = (initialValue: ItemType): ItemType => {
  if (Array.isArray(initialValue)) {
    return getRandomArray();
  }
  switch (typeof initialValue) {
    case 'number':
      return getRandomInt(true);
    case 'string':
      return getRandomString();
    case 'boolean':
      return getRandomBool();
    // entering the danger zone here, lots of things are "object" type
    case 'object':
      return getRandomObject();
    default:
      throw new Error('Untested type encountered');
  }
};

const runGridTests = (initialValue: ItemType) => {
  describe(`<${typeof initialValue}>`, () => {
    let height: number;
    let width: number;
    let grid: Grid<ItemType>;

    beforeEach(() => {
      height = getRandomInt(false);
      width = getRandomInt(false);
      grid = new Grid(width, height, initialValue);
    });

    it('gets filled with an initial value', () => {
      expect([...grid].every((value) => value === initialValue)).toStrictEqual(
        true,
      );
    });

    it('has getters for basic dimensions', () => {
      expect(grid.getHeight()).toStrictEqual(height);
      expect(grid.getWidth()).toStrictEqual(width);
    });

    describe('.get and .set', () => {
      it('gets and sets data in the grid', () => {
        const x = Math.min(getRandomInt(true), width - 1);
        const y = Math.min(getRandomInt(true), height - 1);
        const newValue = getRandomValueForInitialValue(initialValue);
        expect(grid.get(x, y)).toStrictEqual(initialValue);
        expect(grid.set(x, y, newValue)).toStrictEqual(true);
        expect(grid.get(x, y)).toStrictEqual(newValue);
        expect(grid.set(x, y, initialValue)).toStrictEqual(true);
        expect(grid.get(x, y)).toStrictEqual(initialValue);
      });
    });

    describe('.getColumn', () => {
      it('gets a column from the grid', () => {
        const x = Math.min(getRandomInt(true), width - 1);
        let column = grid.getColumn(x);
        expect(column?.length).toStrictEqual(height);
        let newValue: ItemType;
        do {
          newValue = getRandomValueForInitialValue(initialValue);
        } while (newValue === initialValue);
        for (let i = 0; i < height; ++i) {
          grid.set(x, i, newValue);
        }
        column = grid.getColumn(x);
        expect(column?.every((value) => value === newValue)).toStrictEqual(
          true,
        );
        let countNewValue = 0;
        for (const value of grid) {
          if (value === newValue) {
            ++countNewValue;
          }
        }
        expect(countNewValue).toStrictEqual(height);
      });
    });

    describe('.getRow', () => {
      it('gets a row from the grid', () => {
        const y = Math.min(getRandomInt(true), height - 1);
        let row = grid.getRow(y);
        expect(row?.length).toStrictEqual(width);
        let newValue: ItemType;
        do {
          newValue = getRandomValueForInitialValue(initialValue);
        } while (newValue === initialValue);
        for (let i = 0; i < width; ++i) {
          grid.set(i, y, newValue);
        }
        row = grid.getRow(y);
        expect(row?.every((value) => value === newValue)).toStrictEqual(true);
        let countNewValue = 0;
        for (const value of grid) {
          if (value === newValue) {
            ++countNewValue;
          }
        }
        expect(countNewValue).toStrictEqual(width);
      });
    });

    describe('.fill', () => {
      it('fills the entire grid with an arbitrary value', () => {
        const newValue = getRandomValueForInitialValue(initialValue);
        grid.fill(newValue);
        expect([...grid].every((value) => value === newValue)).toStrictEqual(
          true,
        );
      });
    });
  });
};

describe('Grid', () => {
  [
    getRandomInt(true),
    getRandomString(),
    getRandomBool(),
    getRandomObject(),
    getRandomArray(),
  ].forEach((initialValue) => runGridTests(initialValue));
});
