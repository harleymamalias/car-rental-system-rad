import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarRentalDetailsService } from '../car-rental-details.service';
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
  selector: 'app-add-car-details',
  templateUrl: './add-car-details.component.html',
  styleUrls: ['./add-car-details.component.scss']
})
export class AddCarDetailsComponent implements OnInit {
  carForm!: FormGroup;
  carDetails$: Observable<CarDetails[]>;

  constructor(private fb: FormBuilder, private carService: CarRentalDetailsService) {
    this.carDetails$ = this.carService.getCarRentalDetails();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.carForm = this.fb.group({
      id: [''], 
      make: ['', Validators.required],
      carType: ['', Validators.required],
      fuelType: ['', Validators.required],
      model: ['', Validators.required],
      seatCapacity: [0, Validators.required],
      year: [2000, [Validators.required, Validators.min(2000), Validators.max(2023)]],
      bookingPrice: ['', Validators.required],
      carImages: [[]]
    });

    this.carForm.valueChanges.subscribe((formValues) => {
    });
  }

  onSubmit(): void {
    // console.log('button is working');
    // console.log('Form Validity:', this.carForm.valid);
    if (this.carForm.valid) {
      const newCar: CarDetails = {
        id: this.carForm.value.id,
        make: this.carForm.value.make,
        carType: this.carForm.value.carType,
        fuelType: this.carForm.value.fuelType,
        model: this.carForm.value.model,
        seatCapacity: this.carForm.value.seatCapacity,
        year: this.carForm.value.year,
        bookingPrice: this.carForm.value.bookingPrice,
        carImages: this.carForm.value.carImages,
      };

      this.carService.addCarRentalDetail(newCar)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });

      this.carForm.reset();
    }
  }
}