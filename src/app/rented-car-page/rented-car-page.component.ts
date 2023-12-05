import { Component } from '@angular/core';
import { CarServiceService } from '../services/car-service.service';

interface RentDetails{
  amount: number;
  bookingMoney: number;
  dateOfPayment: string;
  username: string;
  message: string;
  numDays: number;
  paymentMethod: string;
  pickupLocation: string;
}

@Component({
  selector: 'app-rented-car-page',
  templateUrl: './rented-car-page.component.html',
  styleUrls: ['./rented-car-page.component.scss']
})
export class RentedCarPageComponent {
  retrievedUsername: string | undefined;
  rentedCars: RentDetails[] = [];
  filteredRentedCars: RentDetails[] = [];

  constructor(private carService: CarServiceService) {}

  async ngOnInit() {
    this.retrievedUsername = await this.carService.getSessionData('username') || 'No username found';

    this.carService.getRentedCars().subscribe(
      (rentedCars: RentDetails[]) => {
        this.rentedCars = rentedCars;
        console.log('Rented cars:', this.rentedCars);
        
        // Here you can process the rented cars as needed
        // For example, you might want to filter or transform the data
        this.filteredRentedCars = this.rentedCars.filter(car => car.username === this.retrievedUsername);
      },
      error => {
        console.error('Error fetching rented cars:', error);
      }
    );


  } 
}
