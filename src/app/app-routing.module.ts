import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NavComponent} from "./nav/nav.component";

import {OrderComponent} from "./order/order.component";
import {UserComponent} from "./user/user.component";
import { BookComponent } from "./book/book.component";
import {AddUserComponent} from "./adduser/adduser.component";
import { AddbulkComponent} from "./addbulk/addbulk.component";
import { LoginComponent} from "./login/login.component";
import { SignupComponent} from "./signup/signup.component";
import {OfferComponent} from "./offer/offer.component";

const routes: Routes = [
  {path: '',redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path: 'Dashboard/Home', component: HomeComponent},
  {path: 'nav', component: NavComponent},
  {path: 'Dashboard/Orders', component: OrderComponent},
  {path: 'Dashboard/Users', component: UserComponent},
  {path: 'Dashboard/Books', component: BookComponent},
  {path: 'Dashboard/Add New', component: AddUserComponent},
  {path: 'Dashboard/Add Bulk', component: AddbulkComponent},
  {path: 'Dashboard/Login',component:LoginComponent},
  {path: 'Dashboard/Offers',component:OfferComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
