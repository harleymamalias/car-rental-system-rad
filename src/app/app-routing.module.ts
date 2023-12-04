import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SideNavigationBarComponent } from './side-navigation-bar/side-navigation-bar.component';
import { UserpageComponent } from './userpage/userpage.component';
import { CarPageComponent } from './car-page/car-page.component';
import { RentedCarPageComponent } from './rented-car-page/rented-car-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'registration-page', component: RegistrationPageComponent},
  {path: 'side-navigation-bar', component: SideNavigationBarComponent},
  {path:'search/:searchTerm', component:UserpageComponent},
  {path:'tag/:tag', component:UserpageComponent},
  {path:'car/:id', component:CarPageComponent},
  {path:'rented', component:RentedCarPageComponent},
  {path:'car', component:CarPageComponent},
  {path:'userpage', component:UserpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
