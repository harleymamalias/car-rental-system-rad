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
      this.carService.getAllCarsBySearchTerm(params['searchTerm']).subscribe(
        cars => {
          this.cars = cars;
        },
        error => {
          console.log("error userpage");
        }
      );
      // else if(params['tag'])
      //   this.cars = this.carService.getAllCarsByTag(params['tag']);
      else
        this.carService.getAll().subscribe(
        cars => {
          this.cars = cars;
        },
        error => {
          console.log("error userpage");
        }
      );
    })
  } 
}
