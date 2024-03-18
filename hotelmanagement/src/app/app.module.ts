import { NgModule,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import the BrowserAnimationsModule here
import {MatToolbarModule} from '@angular/material/toolbar';
import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RoomBookingRequestComponent } from './room-booking-request/room-booking-request.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BillingComponent } from './billing/billing.component';
import {HttpClientModule} from '@angular/common/http';
import { TravelFeedComponent } from './travel-feed/travel-feed.component';
import { NewtravelComponent } from './newtravel/newtravel.component';



@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AuthenticationComponent,
    RoomBookingRequestComponent,
    FeedbackComponent,
    BillingComponent,
    TravelFeedComponent,
    NewtravelComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,

    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
