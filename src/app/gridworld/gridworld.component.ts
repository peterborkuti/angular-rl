import { Component, OnInit, Input } from '@angular/core';
import { Environment, Step } from '../interfaces/interfaces';
import { MatrixComponent } from '../matrix/matrix.component';
import { MatrixLogic } from '../matrix/matrixlogic';
import { Coord, Direction } from './coord';

@Component({
  selector: 'app-gridworld',
  templateUrl: './gridworld.component.html',
  styleUrls: ['./gridworld.component.css']
})
export class GridworldComponent implements OnInit, Environment {
  @Input() n: number;

  private agentCoord: Coord;
  matrixL: MatrixLogic;

  private done = false;
  private reward: number;

  action_space = [0, 1, 2, 3];
  directions = Direction;

  getStep() {
    return new Step([], this.reward, this.done);
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

  ngOnInit() {
    this.reset();
  }

  fillFunction(r: number, c: number, n: number): any {
    if (r === 0 && c === 0) { return 'R'; }

    if (r === n - 1 && c === n - 1) { return 'G'; }

    if (r === Math.floor(n / 2) && c !== Math.floor(n / 2)) { return '#'; }

    return ' ';
  }

  onClick(action: Direction) {
    this.step(action);
  }

}
