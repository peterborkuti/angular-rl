import { MatrixLogic } from './matrixlogic';

describe('MatrixLogic', () => {
  it('should create', () => {
    const ml = new MatrixLogic();
    expect(ml).toBeTruthy();
  });

  it('should create a 10x10 matrix by default', () => {
    const ml = new MatrixLogic();
    expect(ml.matrix.length).toBe(10);
    expect(ml.matrix[0].length).toBe(10);
  });

  it('should fill with the default fill', () => {
    const ml = new MatrixLogic();
    expect(ml.getMatrixRowCol(0, 0)).toBe(0);
    expect(ml.getMatrixRowCol(9, 9)).toBe(99);
  });

  it('should set the matrix', () => {
    const ml = new MatrixLogic();
    ml.setMatrixRowCol(0, 0, 'arbitrary text');
    expect(ml.getMatrixRowCol(0, 0)).toBe('arbitrary text');
  });

  it('changecell should icrement numbers', () => {
    const ml = new MatrixLogic();
    expect(ml.changeCellState(0)).toBe(1);
  });

  it('changecell should rotate characters', () => {
    const ml = new MatrixLogic(1, 'ab');
    expect(ml.changeCellState('a')).toBe('b');
    expect(ml.changeCellState('b')).toBe('a');
  });

  it('changecell should not intact other chars', () => {
    const ml = new MatrixLogic(1, 'ab');
    expect(ml.changeCellState('c')).toBe('c');
  });

  it('change should increment number', () => {
    const ml = new MatrixLogic();
    expect(ml.changeState(0, 0)).toBe(1);
    expect(ml.getMatrixRowCol(0, 0)).toBe(1);
  });

  it('change should rotate character', () => {
    const ml = new MatrixLogic(1, 'ab');
    ml.setMatrixRowCol(0, 0, 'a');
    expect(ml.changeState(0, 0)).toBe('b');
    expect(ml.changeState(0, 0)).toBe('a');
  });

  it('rotateChars should rotate character', () => {
    const ml = new MatrixLogic(1, 'abc');

    expect(ml.rotateChars('a')).toBe('b');
    expect(ml.rotateChars('b')).toBe('c');
    expect(ml.rotateChars('c')).toBe('a');
  });

  it('rotateChars should not rotate other characters', () => {
    const ml = new MatrixLogic(1, 'ab');

    expect(ml.rotateChars('c')).toBe('c');
    expect(ml.rotateChars('d')).toBe('d');
  });

  it('change should not intact other characters than states', () => {
    const ml = new MatrixLogic(1, 'ab');
    ml.setMatrixRowCol(0, 0, 'c');
    expect(ml.changeState(0, 0)).toBe('c');
    expect(ml.getMatrixRowCol(0, 0)).toBe('c');
  });
});
