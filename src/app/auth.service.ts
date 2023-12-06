// auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userEmail: string | null = null;

  constructor(public auth: AngularFireAuth, private router: Router) {}

  login(username: string, password: string): void {
    this.auth.signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user) {
          this.userEmail = user.email;
          console.log('Login successful', user);
          if (user.email === 'harleymamalias@gmail.com') {
            this.router.navigate(['/side-navigation-bar']);
          } else if (user.email === 'abellance2@gmail.com') {
            this.router.navigate(['/userpage']);
          } else {
            this.router.navigate(['']);
          }
        } else {
          console.error('User is null');
        }
      })
      .catch(error => {
        console.error('Login error', error);
        this.showLoginErrorAlert();
      });
  }

  logout(): void {
    this.userEmail = null;
  }

  private showLoginErrorAlert(): void {
    window.alert('Invalid login credentials. Please check your username and password.');
  }
}
