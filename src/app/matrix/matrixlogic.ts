import { isNumber } from 'util';
export class MatrixLogic {

  matrix: any[][];

  constructor(private n = 10, private cellStates = '# G', private fillFunction = MatrixLogic.defaultFillFunction) {
    this.matrix = MatrixLogic.initMatrix(n, cellStates, fillFunction);
  }

  static initMatrix(n: number, cellStates: string, fillFunction: (r, c, n) => any): any[][] {
    const matrix = new Array(n);

    for (let r = 0; r < n; r++) {
      const line: any[][] = new Array(n);

      for (let c = 0; c < n; c++) {
        line[c] = fillFunction(r, c, n);
      }

      matrix[r] = line;
    }
    return matrix;
  }

  static defaultFillFunction(row: number, col: number, n: number): any {
    return row * n + col;
  }

  setMatrixRowCol(row: number, col: number, value: any) {
    this.matrix[row][col] = value;
  }

  getMatrixRowCol(row: number, col: number): any {
    return this.matrix[row][col];
  }

  rotateChars(char: string): string {
    const i = this.cellStates.indexOf(char);

    if (i > -1) {
      return (this.cellStates + this.cellStates)[i + 1];
    }

    return char;
  }

  changeCellState(cell: any): any {
    if (isNumber(cell)) {
      return cell + 1;
    }

    return this.rotateChars(cell);
  }

  changeState(row: number, col: number) {
    const newValue = this.changeCellState(this.getMatrixRowCol(row, col));
    this.setMatrixRowCol(row, col, newValue);

    return newValue;
  }

}
