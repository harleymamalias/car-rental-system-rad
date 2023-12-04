import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookingTransactionsComponent } from './admin-booking-transactions.component';

describe('AdminBookingTransactionsComponent', () => {
  let component: AdminBookingTransactionsComponent;
  let fixture: ComponentFixture<AdminBookingTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBookingTransactionsComponent]
    });
    fixture = TestBed.createComponent(AdminBookingTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
