import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAgenciesComponent } from './view-agencies.component';

describe('ViewAgenciesComponent', () => {
  let component: ViewAgenciesComponent;
  let fixture: ComponentFixture<ViewAgenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAgenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
