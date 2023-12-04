import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car/car.service';
import { Car } from '../shared/models/car';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit{

  car!: Car;
  constructor(private activatedRoute:ActivatedRoute, private carService:CarService){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.carService.getCarById(params['id']).subscribe(
        car => {
          if (car) {
            this.car = car;
          } else {
            console.log('carpage error');
          }
        }
      );

    })
  }
  ngOnInit(): void {
    
  }

}
