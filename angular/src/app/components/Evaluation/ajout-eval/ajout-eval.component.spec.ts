import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEvalComponent } from './ajout-eval.component';

describe('AjoutEvalComponent', () => {
  let component: AjoutEvalComponent;
  let fixture: ComponentFixture<AjoutEvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutEvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
