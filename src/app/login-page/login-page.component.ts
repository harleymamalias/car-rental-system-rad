import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CarServiceService } from '../services/car-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router, private carService: CarServiceService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    const { username, password } = this.loginForm.value;

    this.auth.signInWithEmailAndPassword(username, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log('Login successful', user);

        await this.carService.setSessionData('username', username);

        // Redirect to the home page or any other page after successful login
        this.router.navigate(['/userpage']);
      })
      .catch(error => {
        console.error('Login error', error);
        alert("Please try again!");
      });
  }
}
