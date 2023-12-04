import { Component } from '@angular/core';
import { Car } from '../shared/models/car';
import { CarService } from '../services/car/car.service';

@Component({
  selector: 'app-rented-car-page',
  templateUrl: './rented-car-page.component.html',
  styleUrls: ['./rented-car-page.component.scss']
})
export class RentedCarPageComponent {
  cars:Car[]= [];
  constructor(private carService: CarService){
    
  }

  ngOnInit(): void{
  this.cars = this.carService.getAll();
  }
}
