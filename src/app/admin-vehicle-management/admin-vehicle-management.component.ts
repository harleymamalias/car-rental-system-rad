import { Component, OnInit } from '@angular/core';
import { CarRentalDetailsService } from '../car-rental-details.service';

interface Car {
  id: string;
  make: string;
  model: string;
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
    this.carService.getCarRentalDetails()
      .subscribe((carDetails: Car[]) => {
        this.cars = carDetails;
      });
  }

  editCar(make: string): void {
    console.log('Edit car with ID:', make);
  }

  // deleteCar(id: number): void {
  //   this.carService.deleteCarRentalDetail(id)
  //     .then(() => {
  //       console.log('Car deleted successfully');
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting car:', error);
  //     });
  // }
}
