import { Component, OnInit, Input } from '@angular/core';
import { isNumber } from 'util';
import { MatrixLogic } from './matrixlogic';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  @Input() n: number;
  @Input() title: string;
  @Input() description: string;

  matrix: MatrixLogic;

  constructor() { }

  ngOnInit() {
    this.matrix = new MatrixLogic(this.n, 'G #', this.cellFunction);
  }

  onClick(r: number, c: number) {
    this.matrix.changeState(r, c);
  }

  cellFunction(r, c, n) {
    return r + c === 0 ? 'G' : ((Math.random() < 0.1) ? '#' : ' ');
  }
}
