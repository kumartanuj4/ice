import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactusComponent } from '../contactus/contactus.component';
import { HomeComponent } from '../home/home.component';
import { OrderComponent } from '../order/order.component';
import { PricingComponent } from '../pricing/pricing.component';

const routes: Routes =[
  { path: 'contact', component: ContactusComponent },
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'pricing', component: PricingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  })
export class AppRoutingModule { }
