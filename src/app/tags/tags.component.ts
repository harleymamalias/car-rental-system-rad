import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CarService } from '../services/car/car.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit{

  tags:Tag[] = [];
  constructor(private carService: CarService){

  }

  ngOnInit(): void {
    this.tags = this.carService.getAllTags();
  }

}
