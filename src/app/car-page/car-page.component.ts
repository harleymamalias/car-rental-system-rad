import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from '../services/car-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  formData: any = {};

  constructor(
    private carService: CarServiceService,
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}

  

  ngOnInit(): void {
    console.log('CarPageComponent initialized');
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
              console.log('Car Data:', this.car);
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

  onSubmit() {
    // Push the formData object to Firebase
    const combinedData = {
      carDetails: {
        make: this.car.make,
        model: this.car.model,
        year: this.car.year,
        price: this.car.bookingPrice,
        // Add other car details as needed
      },
      formData: this.formData,
    };
    this.firestore.collection('rented-vehicles').add(combinedData);

    // Clear the form after submission if needed
    this.formData = {};
  }
}
