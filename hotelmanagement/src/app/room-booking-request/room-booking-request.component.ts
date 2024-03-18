import { Component } from '@angular/core';
import { AvailableService } from '../service/available.service';
import { room } from '../vic';
import { FormBuilder } from '@angular/forms';
// import {FormModule} from '@angular/forms';
@Component({
  selector: 'app-room-booking-request',
  templateUrl: './room-booking-request.component.html',
  styleUrls: ['./room-booking-request.component.css']
})
export class RoomBookingRequestComponent {
  submit(login: any){
    console.log("form submitted",login)
  }
  
  constructor(private availableservice: AvailableService, private formBuilder: FormBuilder){
    
  }

  newRoom:room={
    id : 0,
    name:'',
    email :'',
    roomType : ''
  }

  msg:String = ''

  addroom() : void {
    this.availableservice.avail(this.newRoom).subscribe(
    ()=>{
      this.msg='room added sucessfully';
    },
   (Error)=>{
    console.warn('error',Error);

   }
    );
    
  }

}
