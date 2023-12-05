import { Injectable } from '@angular/core';
import { Car } from 'src/app/shared/models/car';
import { Tag } from 'src/app/shared/models/Tag';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  constructor(private firestore: AngularFirestore) {}

  getCarById(id: number): Observable<Car | undefined> {
    return this.getAll().pipe(
      map(cars => cars.find(car => car.id === id))
    );
  }

  getAllCarsBySearchTerm(searchTerm: string): Observable<Car[]> {
    return this.getAll().pipe(
      map(cars => cars.filter(car => car.make.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'Vios', count: 6 },
      { name: 'Xpander', count: 1 },
      { name: 'Hilux', count: 1 },
      { name: 'Yamaha', count: 1 },
    ];
  }

  getAll(): Observable<Car[]> {
    return this.firestore.collection<Car>('car-rental-details').valueChanges();
  }
}