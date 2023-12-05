import { Component } from '@angular/core';
import { CarServiceService } from '../services/car-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  retrievedUsername: string | undefined;
  constructor(private carService: CarServiceService){}
  async ngOnInit() {
    this.retrievedUsername = await this.carService.getSessionData('username') || 'No username found';
  } 
}
