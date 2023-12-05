import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface RentedVehicleDetails {
  amount: number;
  downPayment: number;
  dateOfPayment: string;
  username: string;
  message: string;
  numDays: number;
  bookingDate: string;
  returnDate: string;
  pickupLocation: string;
  fullname: string;
  make: string;
  id: string;
  model: string;
  paymentMethod: string;
}

@Component({
  selector: 'app-admin-booking-transactions',
  templateUrl: './admin-booking-transactions.component.html',
  styleUrls: ['./admin-booking-transactions.component.scss']
})
export class AdminBookingTransactionsComponent implements OnInit {

  rentedVehicles: RentedVehicleDetails[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getRentedVehicles();
  }

  getRentedVehicles(): void {
    this.firestore.collection('rented-vehicles').valueChanges().subscribe((vehicles: unknown[]) => {
      this.rentedVehicles = vehicles as RentedVehicleDetails[];
    });
  }
}
