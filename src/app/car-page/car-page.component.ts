import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from '../services/car-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';

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
// updateTotalAmount() {
// throw new Error('Method not implemented.');
// }
  car!: CarDetails;
  cars: CarDetails[] = [];
  formData: any = {};
  retrievedUsername: string | undefined;
  totalAmount!: number;
  @ViewChild('form')form!: NgForm;
  @ViewChild('alertModal')alertModal!: ElementRef;
  alertMessage!: string;

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

onValidation() {
  // Check if any required field is empty
  if (
    !this.formData.fullname ||
    !this.formData.numDays ||
    !this.formData.pickupLocation ||
    !this.formData.downPayment ||
    // !this.formData.username ||
    !this.formData.paymentMethod ||
    // !this.formData.amount ||
    !this.formData.bookingDate ||
    !this.formData.returnDate
  ) {
    // Display a prompt to the user
    alert('Please fill in all required fields.');
  }
  else{
    this.onSubmit();
  }
}

onSubmit() {
  
  if (this.form.valid){
    formData: this.formData,
    this.formData.username = this.retrievedUsername;
    this.formData.make = this.car.make;
    this.formData.id = this.car.id;
    this.formData.model = this.car.model;
    const totalAmount = this.formData.amount;
    const user = this.formData.fullname; 
    alert(`Hello ${user}! Your Total Amount Rented: ₱${totalAmount}`);
    // this.formData.totalAmount = this.calculateTotalAmount();
    // this.alertMessage = `Total Amount Rented: ₱${totalAmount}`;
    // this.alertModal.nativeElement.classList.add('show');
    // this.alertModal.nativeElement.style.display = 'block';
    // $('#alertModal').modal('show');

    this.firestore.collection('rented-vehicles').add(this.formData);
    // this.formData = {};
    // this.form.resetForm();
    this.form.reset({
      username: this.retrievedUsername,
      // Add other initial values if needed
    });
    // this.form.controls['fullname'].reset();
    // this.form.controls['numDays'].reset();
    // this.form.controls['pickupLocation'].reset();
    // this.form.controls['message'].reset();
    // this.form.controls['downPayment'].reset();
    // this.form.controls['paymentMethod'].reset();
    // this.form.controls['totalAmount'].reset();
    // this.form.controls['bookingDate'].reset();
    // this.form.controls['returnDate'].reset();
  }
  else{
    console.log("Form is invalid. Please fill in all required fields.");
  }
  
}

  calculateTotalAmount() {
    if (this.car && this.formData.numDays) {
      this.formData.amount = this.car.bookingPrice * this.formData.numDays;
    } else {
      this.formData.amount = 0;
    }
  }
}
