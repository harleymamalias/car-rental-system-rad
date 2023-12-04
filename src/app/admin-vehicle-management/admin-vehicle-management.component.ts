import { Component, OnInit } from '@angular/core';
import { CarRentalDetailsService } from '../car-rental-details.service';

interface Car {
  id: string;
  make: string;
  carType: string;
  bookingPrice: number;
  seatCapacity: number;
  fuelType: string;
}

@Component({
  selector: 'app-admin-vehicle-management',
  templateUrl: './admin-vehicle-management.component.html',
  styleUrls: ['./admin-vehicle-management.component.scss']
})
export class AdminVehicleManagementComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarRentalDetailsService) {}

  ngOnInit(): void {
    // Fetch data from the service when the component is initialized
    this.carService.getCarRentalDetails()
      .subscribe((carDetails: Car[]) => {
        this.cars = carDetails;
      });
  }

  editCar(make: string): void {
    console.log('Edit car with ID:', make);
  }

  deleteCar(make: string): void {
    console.log('Delete car with ID:', make);
  }
}
