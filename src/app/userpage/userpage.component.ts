import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car/car.service';
import { OnSameUrlNavigation } from '@angular/router';
import { Car } from '../shared/models/car';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit{
  
  cars:Car[]= [];
  constructor(private carService: CarService, private route:ActivatedRoute){

  }

  ngOnInit(): void{

    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.cars = this.carService.getAllCarsBySearchTerm(params['searchTerm']);
      else if(params['tag'])
        this.cars = this.carService.getAllCarsByTag(params['tag']);
      else
        this.cars = this.carService.getAll();
    })
  } 
}
