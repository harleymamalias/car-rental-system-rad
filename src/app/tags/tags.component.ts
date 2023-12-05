import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../services/car-service.service';

interface Tag {
  name: string;
  count: number;
}

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private carService: CarServiceService) {

    this.tags = this.getAllTags();
  }

  ngOnInit(): void {

  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'Ford', count: 6 },
      { name: 'Xpander', count: 5 },
      { name: 'Hilux', count: 3 },
      { name: 'Toyota', count: 4 },
    ];
  }
}
