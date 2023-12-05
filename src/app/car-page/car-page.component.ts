import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from '../services/car-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss'],
})
export class CarPageComponent implements OnInit {
  car!: CarDetails;
  cars: CarDetails[] = [];
  formData: any = {};
  retrievedUsername: string | undefined;

  constructor(
    private carService: CarServiceService,
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}

  async ngOnInit(): Promise<void> {
    this.retrievedUsername = await this.carService.getSessionData('username') || 'No username found';
    console.log('CarPageComponent initialized');
    
    this.carService.getCarRentalDetails().subscribe(
      (cars: CarDetails[]) => {
        this.cars = cars;
  
        
      this.route.params.subscribe((params) => {
        const carId = params['id'];

        if (carId) {
          const matchedCar = this.cars.find((car) => car.id === carId);

          if (matchedCar) {
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
    formData: this.formData,
    this.firestore.collection('rented-vehicles').add(this.formData);
    this.formData = {};
  }
}
