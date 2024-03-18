import { Component, OnInit } from '@angular/core';
import { NewtravelService } from '../service/newtravel.service';
import { Body, Item } from '../vic';

@Component({
  selector: 'app-newtravel',
  templateUrl: './newtravel.component.html',
  styleUrls: ['./newtravel.component.css']
})
export class NewtravelComponent implements OnInit {
  travelData: Item[] = [];

  constructor(private newTravelservice: NewtravelService) { }

  ngOnInit(): void {
    this.fetchTravelData();
  }

  fetchTravelData() {
    this.newTravelservice.get('/news').subscribe(
      (res:any) =>{
        this.travelData=res.items;
        console.log(res);
      }
    )
    // this.newTravelservice.getTravelData().subscribe(
    //   (res:any) => {
    //     this.travelData = res.items;
    //     console.log(this.travelData);
    //   },
    //   (error) => {
    //     console.error('Error fetching travel data:', error);
    //   }
  
    // );
  }
}
