import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalTypeQRComponent } from './eval-type-qr.component';

describe('EvalTypeQRComponent', () => {
  let component: EvalTypeQRComponent;
  let fixture: ComponentFixture<EvalTypeQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalTypeQRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalTypeQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
