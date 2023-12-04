import { Component } from '@angular/core';

interface Car {
  customerName: string;
  carModel: string;
  bookingDate: string;
  status: string;
}

@Component({
  selector: 'app-admin-booking-transactions',
  templateUrl: './admin-booking-transactions.component.html',
  styleUrls: ['./admin-booking-transactions.component.scss']
})

export class AdminBookingTransactionsComponent {

  cars: Car[] = [
    { customerName: 'Mexl Tuba', carModel: 'Land Cruiser', bookingDate: '12-06-2023', status: 'Pending' },
    { customerName: 'Car 2', carModel: 'Rush', bookingDate: '11-10-2023', status: 'Completed' },
  ];

  editCar(customerName: string): void {
    console.log('Edit car with Customer Name:', customerName);
  }

  deleteCar(customerName: string): void {
    console.log('Delete car with CustomerName:', customerName);
  }
}
