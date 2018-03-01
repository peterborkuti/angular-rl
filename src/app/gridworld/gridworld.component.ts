import { Component, OnInit } from '@angular/core';
import { Environment, Step } from '../interfaces/interfaces';

@Component({
  selector: 'app-gridworld',
  templateUrl: './gridworld.component.html',
  styleUrls: ['./gridworld.component.css']
})
export class GridworldComponent implements OnInit, Environment {
  private readonly LEFT = 0;
  private readonly RIGHT = 1;
  private readonly UP = 2;
  private readonly DOWN = 1;

  action_space: [];
  reset() {
    throw new Error("Method not implemented.");
  }
  step(): Step {
    throw new Error("Method not implemented.");
  }
  render() {
    throw new Error("Method not implemented.");
  }
  constructor() { }

  ngOnInit() {
  }

}
