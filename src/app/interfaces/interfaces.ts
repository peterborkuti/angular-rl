export interface Step {
  readonly observation: any;
  readonly reward: number;
  readonly done: boolean;
  readonly info: {};
}

export interface  Environment {
  readonly action_space: any[];
  reset(): any;
  step(action: any): Step;
  render();
}
