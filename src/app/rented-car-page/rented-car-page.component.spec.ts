import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedCarPageComponent } from './rented-car-page.component';

describe('RentedCarPageComponent', () => {
  let component: RentedCarPageComponent;
  let fixture: ComponentFixture<RentedCarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentedCarPageComponent]
    });
    fixture = TestBed.createComponent(RentedCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
