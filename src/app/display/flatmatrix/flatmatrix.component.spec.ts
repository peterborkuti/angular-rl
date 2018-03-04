import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatmatrixComponent } from './flatmatrix.component';

describe('FlatmatrixComponent', () => {
  let component: FlatmatrixComponent;
  let fixture: ComponentFixture<FlatmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
