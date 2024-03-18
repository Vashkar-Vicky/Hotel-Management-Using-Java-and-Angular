import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RoomBookingRequestComponent } from './room-booking-request/room-booking-request.component';
// import { FeedbackComponent } from './feedback/feedback.component';
import { BillingComponent } from './billing/billing.component';
import { TravelFeedComponent } from './travel-feed/travel-feed.component';
import { NewtravelComponent } from './newtravel/newtravel.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'auth', component: AuthenticationComponent },
  { path: 'room-booking-request', component: RoomBookingRequestComponent },
  { path: 'bill', component: BillingComponent },
  { path: 'travel',component: TravelFeedComponent},
  {path: 'newtravel',component:NewtravelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
