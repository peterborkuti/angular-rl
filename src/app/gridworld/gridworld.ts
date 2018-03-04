import { Environment, Space, Discrete, Step } from '../interfaces/interfaces';
import { Coord } from './coord';
import { MatrixLogic } from '../matrix/matrixlogic';

export class GridWorld implements Environment {
  private agentCoord: Coord;
  public matrixL: MatrixLogic;

  private done = false;
  private reward: number;

  action_space: Space;
  state_space: Space;

  constructor(private n: number = 10) {
    this.state_space = new Discrete( this.n * this.n );
    this.action_space = new Discrete( 4 );
    this.reset();
  }

  getStep() {
    return new Step([this.agentCoord.getIndex(this.n)], this.reward, this.done);
  }

  reset() {
    this.reward = -1;
    this.done = false;
    this.agentCoord = new Coord(0, 0);
    this.matrixL = new MatrixLogic(this.n, 'GR #', this.fillFunction);

    return this.getStep();
  }

  step(action): Step {
    if (this.done) {
      return this.getStep();
    }

    const agentNewCoord = this.agentCoord.step(this.matrixL.matrix, action, ' G');

    this.reward = -1;

    if (this.agentCoord.isEqual(agentNewCoord)) {
      this.reward = -10;

      return this.getStep();
    }

    if (this.matrixL.getMatrixRowCol(agentNewCoord.row, agentNewCoord.col) === 'G') {
      this.reward = 100;
      this.done = true;
    }

    this.matrixL.setMatrixRowCol(this.agentCoord.row, this.agentCoord.col, ' ');
    this.matrixL.setMatrixRowCol(agentNewCoord.row, agentNewCoord.col, 'R');

    this.agentCoord = agentNewCoord;

    return this.getStep();
  }

  fillFunction(r: number, c: number, n: number): any {
    if (r === 0 && c === 0) { return 'R'; }

    if (r === n - 1 && c === n - 1) { return 'G'; }

    if (r === Math.floor(n / 2) && c !== Math.floor(n / 2)) { return '#'; }

    return ' ';
  }

}
