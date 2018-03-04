import { Component, OnInit } from '@angular/core';
import { RandomAgent } from './gw-random-agent';
import { GridWorld } from '../../gridworld/gridworld';

@Component({
  selector: 'app-gw-random-agent',
  templateUrl: './gw-random-agent.component.html',
  styleUrls: ['./gw-random-agent.component.css']
})
export class GwRandomAgentComponent implements OnInit {
  world: GridWorld;
  agent: RandomAgent;

  constructor() { }

  ngOnInit() {
    this.world = new GridWorld(10);
    this.agent = new RandomAgent(this.world);
  }

  onClick(t) {
    const learnOne = this.agent.learn.bind(this.agent, 10);
    setTimeout(learnOne, 0);
  }

}
