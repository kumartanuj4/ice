import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    PricingComponent,
    ContactusComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
