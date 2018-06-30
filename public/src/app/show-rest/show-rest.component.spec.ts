import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRestComponent } from './show-rest.component';

describe('ShowRestComponent', () => {
  let component: ShowRestComponent;
  let fixture: ComponentFixture<ShowRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
