export class Coord {
  readonly LEFT = 0;
  readonly RIGHT = 1;
  readonly UP = 2;
  readonly DOWN = 3;

  readonly actions = [0, 1, 2, 3];

  constructor(readonly row: number, readonly col: number) {}

  isGoodMove(matrix: any[][], emptyChar = ' ', r: number, c: number): boolean {
    if ((r < 0) || (r >= matrix.length) || (c < 0) || (c >= matrix.length)) { return false; }

    return matrix[r][c] === emptyChar;
  }

  isEqual(c: Coord): boolean {
    return Object.is(this.row, c.row) && Object.is(this.col, c.col);
  }

  step(matrix: any[][], action: number, emptyChar = ' '): Coord {
    let r = this.row;
    let c = this.col;

    if (action === this.LEFT) {c--; }
    if (action === this.RIGHT) {c++; }
    if (action === this.UP) {r--; }
    if (action === this.DOWN) {r++; }

    return (this.isGoodMove(matrix, emptyChar, r, c) ? new Coord(r, c) : this);
  }
}
