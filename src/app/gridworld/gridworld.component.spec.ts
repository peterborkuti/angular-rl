import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridworldComponent } from './gridworld.component';

describe('GridworldComponent', () => {
  let component: GridworldComponent;
  let fixture: ComponentFixture<GridworldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridworldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
