import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLogoutComponent } from './staff-logout.component';

describe('StaffLogoutComponent', () => {
  let component: StaffLogoutComponent;
  let fixture: ComponentFixture<StaffLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
