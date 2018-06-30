import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRestComponent } from './all-rest.component';

describe('AllRestComponent', () => {
  let component: AllRestComponent;
  let fixture: ComponentFixture<AllRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
