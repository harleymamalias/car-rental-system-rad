// car-rental-details.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface CarDetails {
  id: number;
  make: string;
  carType: string;
  fuelType: string;
  model: string;
  seatCapacity: number;
  year: number;
  bookingPrice: number;
  carImages: File[];
}



@Injectable({
  providedIn: 'root'
})
export class CarRentalDetailsService {
  constructor(private firestore: AngularFirestore) {}

  getCarRentalDetails(): Observable<CarDetails[]> {
    return this.firestore.collection<CarDetails>('car-rental-details').valueChanges();
  }

  addCarRentalDetail(carDetail: CarDetails): Promise<any> {
    const carCollection = this.firestore.collection<CarDetails>('car-rental-details');
    return carCollection.add(carDetail);
  }

  // updateCarRentalDetail(id: string, carDetail: CarDetails): Promise<void> {
  //   const carDoc = this.firestore.collection<CarDetails>('car-rental-details').doc(id);
  //   return carDoc.update(carDetail);
  // }

  // deleteCarRentalDetail(id: string): Promise<void> {
  //   const carDoc = this.firestore.collection<CarDetails>('car-rental-details').doc(id);
  //   return carDoc.delete();
  // }

  // getRentedVehiclesDetails(): Observable<Car 
}
