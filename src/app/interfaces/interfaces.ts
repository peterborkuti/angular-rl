import { Direction } from '../gridworld/coord';

export class Step {
  constructor (readonly observation = [], readonly reward = -1, readonly done = false, readonly info = {}) {}
}

export interface  Environment {
  readonly action_space: Space;
  readonly state_space: Space;
  reset(): Step;
  step(action: Direction): Step;
}

export interface Space {
  readonly lower_bound: number;
  readonly upper_bound: number;
  readonly n: number;
  sample(): number;
  contains(x: number): boolean;
}

export class Discrete implements Space {
  lower_bound: number;
  upper_bound: number;

  constructor (public n: number) {
    this.lower_bound = 0;
    this.upper_bound = n;
  }
  sample(): number {
    return Math.floor(Math.random() * this.n);
  }
  contains(x: number): boolean {
    return x >= 0 && x < this.n;
  }
}
