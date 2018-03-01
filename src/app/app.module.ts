import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatrixComponent } from './matrix/matrix.component';
import { CellComponent } from './cell/cell.component';
import { GridworldComponent } from './gridworld/gridworld.component';



@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    CellComponent,
    GridworldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
