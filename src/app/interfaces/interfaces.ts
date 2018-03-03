import { Direction } from '../gridworld/coord';

export class Step {
  constructor (readonly observation = [], readonly reward = -1, readonly done = false, readonly info = {}) {}
}

export interface  Environment {
  readonly action_space: Direction[];
  reset(): Step;
  step(action: Direction): Step;
}
