import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ajoutCandidatComponent } from "./ajoutCandidat.component";

describe("UserProfileComponent", () => {
  let component: ajoutCandidatComponent;
  let fixture: ComponentFixture<ajoutCandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ajoutCandidatComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ajoutCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
