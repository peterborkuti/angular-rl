export enum Direction {
  LEFT, RIGHT, UP, DOWN
}

export class Coord {
  constructor(readonly row: number, readonly col: number) {}

  isInMatrix(matrix: any[][]): boolean {
    return ((this.row >= 0) && (this.row < matrix.length) && (this.col >= 0) && (this.col < matrix[0].length));
  }

  isGoodPlace(matrix: any[][], emptyChars = ' '): boolean {
    return this.isInMatrix(matrix) && emptyChars.indexOf(matrix[this.row][this.col]) > -1;
  }

  getActionPlace(action: Direction): Coord {
    let r = this.row;
    let c = this.col;

    if (action === Direction.LEFT) {c--; }
    if (action === Direction.RIGHT) {c++; }
    if (action === Direction.UP) {r--; }
    if (action === Direction.DOWN) {r++; }

    return new Coord(r, c);
  }

  isEqual(c: Coord): boolean {
    return Object.is(this.row, c.row) && Object.is(this.col, c.col);
  }

  step(matrix: any[][], action: number, emptyChars = ' '): Coord {
    const newPlace = this.getActionPlace(action);
    return (newPlace.isGoodPlace(matrix, emptyChars) ? newPlace : this);
  }
}
