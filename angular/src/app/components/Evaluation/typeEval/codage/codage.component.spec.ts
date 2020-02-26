import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodageComponent } from './codage.component';

describe('CodageComponent', () => {
  let component: CodageComponent;
  let fixture: ComponentFixture<CodageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
