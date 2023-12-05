import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../services/car-service.service';
import { OnSameUrlNavigation } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})

export class UserpageComponent {
  cars: CarDetails[] = [];

  constructor(private carService: CarServiceService,  private route:ActivatedRoute) {}

  ngOnInit(): void{

    this.route.params.subscribe(params => {
      
        this.carService.getCarRentalDetails().subscribe(
          (cars: CarDetails[]) => {
          this.cars = cars;
        },
          (error: any) => {
          console.log("error userpage");
        }
      );
    })
  } 
}
