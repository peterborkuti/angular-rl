import { Component, OnInit, Input } from '@angular/core';
import { Coord } from '../../gridworld/coord';

@Component({
  selector: 'app-flatmatrix',
  templateUrl: './flatmatrix.component.html',
  styleUrls: ['./flatmatrix.component.css']
})
export class FlatmatrixComponent implements OnInit {
  @Input() title = 'FlatMatrixDisplay';
  @Input() description = 'display matrix stored in a one-dimensional array';
  @Input() n = 1;
  @Input() flatMatrix = new Array(1);

  loopArray: any[];

  constructor() { }

  ngOnInit() {
    this.loopArray = new Array(this.n);
  }

  getCellIndex(r: number, c: number): number {
    return new Coord(r, c).getIndex(this.n);
  }

  getCellByIndex(index: number): any {
    return (typeof this.flatMatrix[index] === 'undefined') ? ' ' : this.flatMatrix[index];
  }

}
