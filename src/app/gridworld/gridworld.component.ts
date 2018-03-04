import { Component, OnInit, Input } from '@angular/core';
import { Environment, Step, Space, Discrete } from '../interfaces/interfaces';
import { MatrixComponent } from '../matrix/matrix.component';
import { MatrixLogic } from '../matrix/matrixlogic';
import { Coord, Direction } from './coord';
import { GridWorld } from './gridworld';

@Component({
  selector: 'app-gridworld',
  templateUrl: './gridworld.component.html',
  styleUrls: ['./gridworld.component.css']
})
export class GridworldComponent implements OnInit {
  state_space: Space;
  @Input() n = 10;

  gridWorld: GridWorld;
  directions = Direction;

  ngOnInit() {
    this.gridWorld = new GridWorld(this.n);
  }

  onClick(action: Direction) {
    this.gridWorld.step(action);
  }

}
