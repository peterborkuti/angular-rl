import { Environment, Step } from '../../interfaces/interfaces';

export class RandomAgent {
  public state_action: number[];
  public state_reward: number[];

  private lastState: any;

  constructor(private world: Environment) {
    this.state_action = [];
    this.state_reward = [];
    this.lastState = this.world.reset().observation[0];
  }

  private updatePolicy(state, action, reward) {
    if (!this.state_reward[state] || this.state_reward[state] < reward) {
      this.state_reward[state] = reward;
      this.state_action[state] = action;
    }
  }

  learn(iteration: number = 100) {
    for (let i = 0; i < iteration; i++) {
      const action = this.world.action_space.sample();
      const t = this.world.step(action);

      this.updatePolicy(this.lastState, action, t.reward);

      this.lastState = t.done ? this.world.reset().observation[0] : t.observation[0];
    }
  }

  applyKnowledge(state: any) {

  }
}
