import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car/car.service';
import { Car } from '../shared/models/car';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

interface RentDetails {
  carName: string;
  fromDate: string;
  toDate: string;
  location: string;
  message: string;
  price: number;
  initialPayment: number;
  customerName: string;
  paymentMethod: string;
  amount: number;
  dateOfPayment: string;
}

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit{
  rentDetails!: FormGroup;
  rentDetails$: Observable<RentDetails[]>;
  car!: Car;

  constructor(private activatedRoute:ActivatedRoute, private carService:CarService, private fb:FormBuilder, private firestore: AngularFirestore){

    this.rentDetails$ = this.firestore.collection<RentDetails>('add-car-details').valueChanges();

  }



  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      console.log('Car ID:', params['id']);

      

      if (params['id']) {
        this.carService.getCarById(params['id']).subscribe(
          (car) => {
            if (car) {
              this.car = car;
              console.log('Car found:', this.car);
              this.initForm();
            } else {
              console.log('Car not found');
            }
          },
          (error) => {
            console.log('Error fetching car details:', error);
          }
        );
      }
    });
    


  }

  initForm(): void {
    this.rentDetails = this.fb.group({
      carName: [`${this.car.make} ${this.car.model} ${this.car.year}`, Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      location: ['', Validators.required],
      message: ['', Validators.required],
      price: [this.car.price, [Validators.required, Validators.min(2000), Validators.max(2023)]],
      initialPayment: ['', Validators.required],
      customerName: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      amount: ['', Validators.required],
      dateOfPayment: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.rentDetails.valid) {
      const newCar: RentDetails = {
        carName: this.rentDetails.value.carName,
        fromDate: this.rentDetails.value.fromDate,
        toDate: this.rentDetails.value.toDate,
        location: this.rentDetails.value.location,
        message: this.rentDetails.value.message,
        price: this.rentDetails.value.price,
        initialPayment: this.rentDetails.value.initialPayment,
        customerName: this.rentDetails.value.customerName,
        paymentMethod: this.rentDetails.value.paymentMethod,
        amount: this.rentDetails.value.amount,
        dateOfPayment: this.rentDetails.value.dateOfPayment
      };

      const carCollection = this.firestore.collection<RentDetails>('add-car-details');
      carCollection.add(newCar)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });

      this.rentDetails.reset();
    }
  }

  patchFormWithCarDetails(): void {
    if (this.car) {
      this.rentDetails.patchValue({
        carName: this.car.make, // Update with the correct property name from your Car model
        // Other fields here
      });
    }
  }

}