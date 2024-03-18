import { Component, OnInit } from '@angular/core';
import { TravelItem } from '../vic'; // Make sure the path to TravelItem is correct
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'app-travel-feed',
  templateUrl: './travel-feed.component.html',
  styleUrls: ['./travel-feed.component.css']
})
export class TravelFeedComponent implements OnInit {
  travelItems: TravelItem[] = [];

  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
    this.fetchTravelRss();
  }

  fetchTravelRss() {
    this.travelService.getTravelRss().subscribe(
      (data: TravelItem[]) => {
        this.travelItems = data;
        console.log(this.travelItems);
      },
      (error) => {
        console.error('Error fetching travel Rss feed:', error);
      }
    );
  }
}
