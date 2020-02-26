import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalCandidatComponent } from './eval-candidat.component';

describe('EvalCandidatComponent', () => {
  let component: EvalCandidatComponent;
  let fixture: ComponentFixture<EvalCandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalCandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
