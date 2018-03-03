import { Component, OnInit, Input } from '@angular/core';
import { MatrixLogic } from './matrixlogic';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  @Input() n = 10;
  @Input() title = '';
  @Input() description = '';

  @Input() matrix = new MatrixLogic();

  constructor() { }

  ngOnInit() {
  }

  onClick(r: number, c: number) {
    this.matrix.changeState(r, c);
  }
}
