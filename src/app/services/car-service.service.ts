import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

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

export class CarServiceService {

  constructor(private firestore: AngularFirestore) { }

  getCarRentalDetails(): Observable<CarDetails[]> {
    return this.firestore.collection<CarDetails>('car-rental-details').valueChanges();
  }

  getCarById(id: number): Observable<CarDetails | undefined> {
    return this.getCarRentalDetails().pipe(
      map((cars: any[]) => cars.find((car: { id: number; }) => car.id === id))
    );
  }
}
