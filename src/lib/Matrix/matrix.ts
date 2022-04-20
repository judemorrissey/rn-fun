import Grid from 'lib/Grid';

export default class Matrix {
  matrix: Grid<number>;

  constructor() {
    this.matrix = new Grid();
  }
}
