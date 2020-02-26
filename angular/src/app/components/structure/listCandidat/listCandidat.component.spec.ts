import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { listCandidatComponent } from "./listCandidat.component";

describe("listCandidatComponent", () => {
  let component: listCandidatComponent;
  let fixture: ComponentFixture<listCandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [listCandidatComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(listCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
