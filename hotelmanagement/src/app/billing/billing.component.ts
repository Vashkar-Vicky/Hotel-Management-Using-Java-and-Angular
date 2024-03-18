import { Component } from '@angular/core';
// import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {

  //  constructor(private http: HttpClient) {}

  billingData: any = {
   
    roomType: '',
    formTo: null,
    formDate: null,
    numberOfMembers: null,
    services: {
      spa: false,
      swimmingPool: false,
      breakfast: false
    },
    totalAmount: 0
  };

  submitForm() {
    // Calculate the total amount based on selected services and other data
    this.calculateTotalAmount();

    // Perform further processing or API calls here with the form data
    // For example, you can send the form data to a backend server or display a success message.
    // You can also use a service to handle form submissions.

    // Clear the form after submission (optional)
    this.resetForm();
  }

  calculateTotalAmount() {
    const standardRoomRate = 2400;
    const deluxeRoomRate = 3000;
    const addonServicesRate = 30;
  
    let totalAmount = 0;
  
    if (this.billingData.roomType === 'standard') {
      totalAmount += standardRoomRate;
    } else if (this.billingData.roomType === 'deluxe') {
      totalAmount += deluxeRoomRate;
    }
  
    if (this.billingData.services.spa) {
      totalAmount += addonServicesRate;
    }
    if (this.billingData.services.swimmingPool) {
      totalAmount += addonServicesRate;
    }
    if (this.billingData.services.breakfast) {
      totalAmount += addonServicesRate;
    }
  
    this.billingData.totalAmount = totalAmount;
  }

  resetForm() {
    this.billingData = {
      name: '',
      email: '',
      roomType: '',
      formTo: null,
      formDate: null,
      numberOfMembers: null,
      services: {
        spa: false,
        swimmingPool: false,
        breakfast: false
      },
      totalAmount: 0
    };
  }
}