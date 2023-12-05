import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from '../services/car-service.service';

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

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss'],
})
export class CarPageComponent implements OnInit {
  car!: CarDetails;
  cars: CarDetails[] = [];

  constructor(
    private carService: CarServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Fetch all car details
    this.carService.getCarRentalDetails().subscribe(
      (cars: CarDetails[]) => {
        this.cars = cars;

        // Find the matched car based on route parameter
        this.route.params.subscribe((params) => {
          const carId = params['id'];

          if (carId) {
            const matchedCar = this.cars.find((car) => car.id === +carId);

            if (matchedCar) {
              // Car found, assign it
              this.car = matchedCar;
            } else {
              console.error(`Car not found for id: ${carId}`);
            }
          } else {
            console.error('Car ID not provided in route params');
          }
        });
      },
      (error: any) => {
        console.error('Error fetching car details:', error);
      }
    );
  }
}
