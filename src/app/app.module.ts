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
import { getFirestore, provideFirestore, FirestoreModule} from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AddCarDetailsComponent } from './add-car-details/add-car-details.component';
import { UserpageComponent } from './userpage/userpage.component';
import { CarPageComponent } from './car-page/car-page.component';
import { RentedCarPageComponent } from './rented-car-page/rented-car-page.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';

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
    UserpageComponent,
    CarPageComponent,
    RentedCarPageComponent,
    SearchComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyABE3NZNOp5EsGAr18A7NBGhlUIjTKfHuo",
      authDomain: "rentanddrive-angular-1e5ec.firebaseapp.com",
      projectId: "rentanddrive-angular-1e5ec",
      storageBucket: "rentanddrive-angular-1e5ec.appspot.com",
      messagingSenderId: "692514391678",
      appId: "1:692514391678:web:49be852647a85d1d293a2f"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    FirestoreModule,
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: {
      apiKey: "AIzaSyABE3NZNOp5EsGAr18A7NBGhlUIjTKfHuo",
      authDomain: "rentanddrive-angular-1e5ec.firebaseapp.com",
      projectId: "rentanddrive-angular-1e5ec",
      storageBucket: "rentanddrive-angular-1e5ec.appspot.com",
      messagingSenderId: "692514391678",
      appId: "1:692514391678:web:49be852647a85d1d293a2f"
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
