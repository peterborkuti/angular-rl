import { Coord, Direction } from './coord';

describe('Coord', () => {
  it('should create', () => {
    expect(new Coord(0, 0)).toBeTruthy();
  });

  it('should equals work', () => {
    expect(new Coord(0, 0).isEqual(new Coord(0, 0))).toBeTruthy();
    expect(new Coord(0, 0).isEqual(new Coord(1, 0))).toBeFalsy();
    expect(new Coord(0, 0).isEqual(new Coord(0, 1))).toBeFalsy();
  });

  it('should check coord is a place in a matrix', () => {
    const m = [[' ', ' '], [' ', ' ']];
    expect(new Coord(0, 0).isInMatrix(m)).toBeTruthy();
    expect(new Coord(0, 1).isInMatrix(m)).toBeTruthy();
    expect(new Coord(1, 0).isInMatrix(m)).toBeTruthy();
    expect(new Coord(1, 1).isInMatrix(m)).toBeTruthy();

    expect(new Coord(-1, 0).isInMatrix(m)).toBeFalsy();
    expect(new Coord(0, -1).isInMatrix(m)).toBeFalsy();
    expect(new Coord(2,  0).isInMatrix(m)).toBeFalsy();
    expect(new Coord(0,  2).isInMatrix(m)).toBeFalsy();
  });

  it('should check if it is empty space in a matrix', () => {
    const m = [[' ', 'x'], ['x', ' ']];
    expect(new Coord(0, 0).isGoodPlace(m)).toBeTruthy();
    expect(new Coord(0, 1).isGoodPlace(m)).toBeFalsy();
    expect(new Coord(1, 0).isGoodPlace(m)).toBeFalsy();
    expect(new Coord(1, 1).isGoodPlace(m)).toBeTruthy();
  });

  it('should allow to step onto allowed chars', () => {
    const m = [[' ', 'x'], ['x', 'G']];
    expect(new Coord(0, 0).isGoodPlace(m, ' G')).toBeTruthy();
    expect(new Coord(0, 1).isGoodPlace(m, ' G')).toBeFalsy();
    expect(new Coord(1, 0).isGoodPlace(m, ' G')).toBeFalsy();
    expect(new Coord(1, 1).isGoodPlace(m, ' G')).toBeTruthy();
  });

  it('should give good places for actions', () => {
    const origo = new Coord(1, 1);
    expect(origo.getActionPlace(Direction.UP).isEqual(new Coord(0, 1))).toBeTruthy();
    expect(origo.getActionPlace(Direction.DOWN).isEqual(new Coord(2, 1))).toBeTruthy();
    expect(origo.getActionPlace(Direction.LEFT).isEqual(new Coord(1, 0))).toBeTruthy();
    expect(origo.getActionPlace(Direction.RIGHT).isEqual(new Coord(1, 2))).toBeTruthy();
  });

  it('should step onto good, empty places', () => {
    const m = [
      [' ', ' ', ' '],
      [' ', 'R', 'x'],
      [' ', 'x', ' ']];

    const robot = new Coord(1, 1);

    expect(robot.step(m, Direction.UP).isEqual(new Coord(0, 1))).toBeTruthy();
    expect(robot.step(m, Direction.DOWN).isEqual(robot)).toBeTruthy();
    expect(robot.step(m, Direction.LEFT).isEqual(new Coord(1, 0))).toBeTruthy();
    expect(robot.step(m, Direction.RIGHT).isEqual(robot)).toBeTruthy();
  });
});
