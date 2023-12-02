import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SideNavigationBarComponent } from './side-navigation-bar/side-navigation-bar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AddCarDetailsComponent } from './add-car-details/add-car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavigationBarComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    SideNavigationBarComponent,
    AdminDashboardComponent,
    AddCarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBlzx0KKDfrIuqOTKchH3rarpujslTfEe8",
      authDomain: "rentanddrive-angular.firebaseapp.com",
      projectId: "rentanddrive-angular",
      storageBucket: "rentanddrive-angular.appspot.com",
      messagingSenderId: "1029085339817",
      appId: "1:1029085339817:web:9b47e9b21df8b24edd09b8"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: {
      apiKey: "AIzaSyBlzx0KKDfrIuqOTKchH3rarpujslTfEe8",
      authDomain: "rentanddrive-angular.firebaseapp.com",
      projectId: "rentanddrive-angular",
      storageBucket: "rentanddrive-angular.appspot.com",
      messagingSenderId: "1029085339817",
      appId: "1:1029085339817:web:9b47e9b21df8b24edd09b8"
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
