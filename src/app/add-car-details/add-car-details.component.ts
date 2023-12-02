import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface CarDetails {
  id?: string;
  make: string;
  carType: string;
  fuelType: string;
  model: string;
  seatCapacity: number;
  year: number;
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

  constructor(private fb: FormBuilder, private firestore: AngularFirestore) {
    this.carDetails$ = this.firestore.collection<CarDetails>('add-car-details').valueChanges();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.carForm = this.fb.group({
      make: ['', Validators.required],
      carType: ['', Validators.required],
      fuelType: ['', Validators.required],
      model: ['', Validators.required],
      seatCapacity: [0, Validators.required],
      year: [2000, [Validators.required, Validators.min(2000), Validators.max(2023)]],
      carImages: [[]]
    });
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      const newCar: CarDetails = {
        make: this.carForm.value.make,
        carType: this.carForm.value.carType,
        fuelType: this.carForm.value.fuelType,
        model: this.carForm.value.model,
        seatCapacity: this.carForm.value.seatCapacity,
        year: this.carForm.value.year,
        carImages: this.carForm.value.carImages
      };

      const carCollection = this.firestore.collection<CarDetails>('add-car-details');
      carCollection.add(newCar)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });

      this.carForm.reset();
    }
  }

  deleteItem(id: string | undefined): void {
    console.log('Deleting item with ID:', id);
    if (id) {
      this.firestore.collection<CarDetails>('add-car-details').doc(id).delete()
        .then(() => console.log('Document deleted successfully'))
        .catch(error => console.error('Error deleting document:', error));
    }
  }
  
}
