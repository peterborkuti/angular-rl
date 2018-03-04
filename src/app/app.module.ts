import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatrixComponent } from './matrix/matrix.component';
import { CellComponent } from './cell/cell.component';
import { GridworldComponent } from './gridworld/gridworld.component';
import { GwRandomAgentComponent } from './agents/gw-random-agent/gw-random-agent.component';
import { FlatmatrixComponent } from './display/flatmatrix/flatmatrix.component';
import { PolicyIterationAgentComponent } from './agents/policy-iteration-agent/policy-iteration-agent.component';



@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    CellComponent,
    GridworldComponent,
    GwRandomAgentComponent,
    FlatmatrixComponent,
    PolicyIterationAgentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
