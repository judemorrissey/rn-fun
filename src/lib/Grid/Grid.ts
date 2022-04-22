/**
 * Represents a grid of values. Coordinates are zero based where the following are true:
 * - (0, 0) is the upper-left corner of the grid
 * - (width - 1, height - 1) is the bottom right corner
 */
export default class Grid<ItemType> {
  protected data: ItemType[][];
  protected height: number;
  protected width: number;

  constructor(width: number, height: number, initialFillValue: ItemType) {
    if (width < 1 || height < 1) {
      throw new Error(
        `${this.constructor.name} may only be initialized with positive size values`,
      );
    }
    if (initialFillValue == null) {
      throw new Error(
        `${this.constructor.name} must have an initial fill value`,
      );
    }
    this.width = width;
    this.height = height;
    this.data = [];
    const initialColumn = [];
    for (let i = 0; i < height; ++i) {
      initialColumn.push(initialFillValue);
    }
    for (let i = 0; i < width; ++i) {
      this.data.push(initialColumn.slice());
    }
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.width; ++i) {
      for (let j = 0; j < this.height; ++j) {
        yield this.data[i][j];
      }
    }
  }

  private isCoordinateInRange(x: number, y: number) {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  fill(value: ItemType) {
    for (let i = 0; i < this.width; ++i) {
      for (let j = 0; j < this.height; ++j) {
        this.data[i][j] = value;
      }
    }
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  get(x: number, y: number) {
    return this.isCoordinateInRange(x, y) ? this.data[x][y] : null;
  }

  getColumn(x: number) {
    return this.isCoordinateInRange(x, 0) ? this.data[x] : null;
  }

  getRow(y: number) {
    if (!this.isCoordinateInRange(0, y)) {
      return null;
    }
    const row = [];
    for (let i = 0; i < this.width; ++i) {
      row.push(this.data[i][y]);
    }
    return row;
  }

  set(x: number, y: number, value: ItemType): boolean {
    if (!this.isCoordinateInRange(x, y)) {
      return false;
    }
    this.data[x][y] = value;
    return true;
  }
}
