import { Component } from '@angular/core';

interface Car {
  id: number;
  name: string;
  category: string;
  rentalFee: number;
  capacity: number;
  fuelType: string;
}

@Component({
  selector: 'app-admin-vehicle-management',
  templateUrl: './admin-vehicle-management.component.html',
  styleUrls: ['./admin-vehicle-management.component.scss']
})

export class AdminVehicleManagementComponent {

  

  cars: Car[] = [
    { id: 1, name: 'Car 1', category: 'Sedan', rentalFee: 50, capacity: 4, fuelType: 'Petrol' },
    { id: 2, name: 'Car 2', category: 'SUV', rentalFee: 70, capacity: 7, fuelType: 'Diesel' },
  ];

  editCar(carId: number): void {
    console.log('Edit car with ID:', carId);
  }

  deleteCar(carId: number): void {
    console.log('Delete car with ID:', carId);
  }
}
