import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfilComponent } from './coach-profil.component';

describe('CoachProfilComponent', () => {
  let component: CoachProfilComponent;
  let fixture: ComponentFixture<CoachProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
