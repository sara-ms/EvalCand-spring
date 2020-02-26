import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEvalComponent } from './edit-eval.component';

describe('EditEvalComponent', () => {
  let component: EditEvalComponent;
  let fixture: ComponentFixture<EditEvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
