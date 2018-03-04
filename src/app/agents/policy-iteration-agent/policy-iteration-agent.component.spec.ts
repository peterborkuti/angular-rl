import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyIterationAgentComponent } from './policy-iteration-agent.component';

describe('PolicyIterationAgentComponent', () => {
  let component: PolicyIterationAgentComponent;
  let fixture: ComponentFixture<PolicyIterationAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyIterationAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyIterationAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
