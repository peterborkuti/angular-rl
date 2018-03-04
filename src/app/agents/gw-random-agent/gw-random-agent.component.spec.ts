import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwRandomAgentComponent } from './gw-random-agent.component';

describe('GwRandomAgentComponent', () => {
  let component: GwRandomAgentComponent;
  let fixture: ComponentFixture<GwRandomAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwRandomAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwRandomAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
