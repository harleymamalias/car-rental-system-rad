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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';  // Import AngularFireModule
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';  // Import AngularFirestoreModule
import { AddCarDetailsComponent } from './add-car-details/add-car-details.component';
import { CarPageComponent } from './car-page/car-page.component';
import { RentedCarPageComponent } from './rented-car-page/rented-car-page.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { UserSideBarComponent } from './user-side-bar/user-side-bar.component';
import { UserpageComponent } from './userpage/userpage.component';

const firebaseConfig = {
  apiKey: "AIzaSyABE3NZNOp5EsGAr18A7NBGhlUIjTKfHuo",
  authDomain: "rentanddrive-angular-1e5ec.firebaseapp.com",
  projectId: "rentanddrive-angular-1e5ec",
  storageBucket: "rentanddrive-angular-1e5ec.appspot.com",
  messagingSenderId: "692514391678",
  appId: "1:692514391678:web:2b5bc35e2834dd51293a2f"
};

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavigationBarComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    SideNavigationBarComponent,
    AdminDashboardComponent,
    AddCarDetailsComponent,
    UserSideBarComponent,
    TagsComponent,
    SearchComponent,
    UserpageComponent,
    RentedCarPageComponent,
    CarPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Initialize AngularFire with the config
    AngularFirestoreModule,  // Add AngularFirestoreModule
  ],
  // providers: [
  //   { provide: FIREBASE_OPTIONS, useValue: firebaseConfig }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
