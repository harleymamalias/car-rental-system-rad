import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVehicleManagementComponent } from './admin-vehicle-management.component';

describe('AdminVehicleManagementComponent', () => {
  let component: AdminVehicleManagementComponent;
  let fixture: ComponentFixture<AdminVehicleManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVehicleManagementComponent]
    });
    fixture = TestBed.createComponent(AdminVehicleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
