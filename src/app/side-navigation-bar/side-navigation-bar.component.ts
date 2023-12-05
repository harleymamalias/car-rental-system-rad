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
}

interface UserDetails {
  firstName: string;
  lastName: string;
  username: string;
  mobileNo: string;
}

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.scss']
})
export class SideNavigationBarComponent implements OnInit {

  totalBookings: number = 0;
  numberOfClients: number = 0;
  totalEarnings: number = 0;
  userDetails: UserDetails[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.calculateStats();
    this.getUserDetails();
  }

  calculateStats(): void {
    this.firestore.collection<RentedVehicleDetails>('rented-vehicles').valueChanges().subscribe((vehicles) => {
      this.totalBookings = vehicles.length;
      this.numberOfClients = new Set(vehicles.map(vehicle => vehicle.username)).size;
      this.totalEarnings = vehicles.reduce((total, vehicle) => total + vehicle.amount, 0);
    });
  }

  getUserDetails(): void {
    this.firestore.collection<UserDetails>('users').valueChanges().subscribe((users) => {
      this.userDetails = users;
    });
  }
}
