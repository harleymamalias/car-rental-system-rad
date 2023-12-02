import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private firestore: AngularFirestore) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  //Register user with email and password then store other personal information in firestore database
  register(): void {
    const { firstName, lastName, mobileNo, username, password } = this.registrationForm.value;

    this.auth.createUserWithEmailAndPassword(username, password)
      .then((userCredential) => {
        const user = userCredential.user;

        this.firestore.collection('users').doc(user!.uid).set({
          firstName,
          lastName,
          mobileNo,
          username
        })
        .then(() => {
          console.log('User information stored successfully in Firestore');
        })
        .catch(error => {
          console.error('Error storing user information in Firestore', error);
        });

        console.log('Registration successful', user);

        this.registrationForm.reset();
      })
      .catch(error => {
        console.error('Registration error', error);
      });
  }
}
