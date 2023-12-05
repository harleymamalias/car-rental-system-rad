import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
// import { AngularFirestore } from '@angular/fire/firestore';

interface CarDetails {
  id: string;
  make: string; 
  carType: string;
  fuelType: string;
  model: string;
  seatCapacity: number;
  year: number;
  bookingPrice: number;
  carImages: File[];
}

interface RentDetails{
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
}

@Injectable({
  providedIn: 'root'
})

export class CarServiceService {

  constructor(private firestore: AngularFirestore) { }

  getCarRentalDetails(): Observable<CarDetails[]> {
    return this.firestore.collection<CarDetails>('car-rental-details').valueChanges();
  }

  getRentedCars(): Observable<RentDetails[]> {
    return this.firestore.collection<RentDetails>('rented-vehicles').valueChanges();
  }

  getCarById(id: string): Observable<CarDetails | undefined> {
    return this.getCarRentalDetails().pipe(
      map((cars: any[]) => cars.find((car: { id: string; }) => car.id === id))
    );
  }

  setSessionData(key: string, value: any): Promise<void> {
    return this.firestore.collection('sessions').doc(key).set({ value });
  }

  getSessionData(key: string): Promise<any | undefined> {
    return this.firestore.collection('sessions').doc(key).get().toPromise()
      .then(snapshot => {
        if (snapshot && snapshot.exists) {
          return snapshot.data() as { value: any }; // Explicit type assertion
        } else {
          return undefined;
        }
      })
      .then(data => data?.value);
  }
  
  
  
}
