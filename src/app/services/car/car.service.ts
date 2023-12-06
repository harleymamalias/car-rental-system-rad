import { Injectable } from '@angular/core';
import { Car } from 'src/app/shared/models/car';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCarById(id:number):Car{
    return this.getAll().find(car=>car.id==id)!;
  }
  getAllCarsBySearchTerm(searchTerm:string): Car[]{
    return this.getAll().filter(car=>car.carName.toLowerCase().includes(searchTerm.toLowerCase()));
  }

//Proper way is to get data from server
  getAllTags():Tag[]{
    return[
      {name:'All', count: 8},
      {name:'Vios', count: 6},
      {name:'Xpander', count: 1},
      {name:'Hilux', count: 1},
      {name:'Yamaha', count: 1},

    ]

  }

  getAllCarsByTag(tag:string): Car[]{
    return tag.toLowerCase() == "all" ?
    this.getAll():
    this.getAll().filter(car=>car.tags?.includes(tag.toLowerCase()));  
  }

  getAll():Car[]{
    return[
      {
        imageUrl: 'assets/Car.png',
        carName: 'Toyota Vios',
        capacity: 5,
        carType: 'Electric',
        mileageCap: 'Unlimited Mileage',
        price: 2500,
        tags: ['vios', '5-seaters'],
        id: 1,
      },

      {
        imageUrl: 'assets/Car.png',
        carName: 'Xpander',
        capacity: 5,
        carType: 'Electric',
        mileageCap: 'Unlimited Mileage',
        price: 2500,
        tags: ['xpander', '8-seaters'],
        id: 2,
      },

      {
        imageUrl: 'assets/Car.png',
        carName: 'Hilux',
        capacity: 5,
        carType: 'Electric',
        mileageCap: 'Unlimited Mileage',
        price: 2500,
        tags: ['hilux', '6-seaters'],
        id: 3,
      },

      {
        imageUrl: 'assets/Car.png',
        carName: 'Yamaha',
        capacity: 5,
        carType: 'Electric',
        mileageCap: 'Unlimited Mileage',
        price: 2500,
        tags: ['yamaha', '5-seaters'],
        id: 4,
      },

      {
        imageUrl: 'assets/Car.png',
        carName: 'Toyota Vios',
        capacity: 5,
        carType: 'Electric',
        mileageCap: 'Unlimited Mileage',
        price: 2500,
        tags: ['vios', '5-seaters'],
        id: 5,
      },

      {
        imageUrl: 'assets/Car.png',
        carName: 'Toyota Vios',
        capacity: 5,
        carType: 'Electric',
        mileageCap: 'Unlimited Mileage',
        price: 2500,
        tags: ['vios', '5-seaters'],
        id: 6,
      },

      {
        imageUrl: 'assets/Car.png',
        carName: 'Toyota Vios',
        capacity: 5,
        carType: 'Electric',
        mileageCap: 'Unlimited Mileage',
        price: 2500,
        tags: ['vios', '5-seaters'],
        id: 7,
      },

      {
        imageUrl: 'assets/Car.png',
        carName: 'Toyota Vios',
        capacity: 5,
        carType: 'Electric',
        mileageCap: 'Unlimited Mileage',
        price: 2500,
        tags: ['vios', '5-seaters'],
        id: 8,
      },
      
      
    ];
  }
}
