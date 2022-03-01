import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccessGuard } from './access.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderManageComponent } from './order-manage/order-manage.component';
import { OtpComponent } from './otp/otp.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'login',pathMatch:'full'},
  { path: 'contact', component: ContactComponent,canActivate: [AccessGuard]},
  { path: 'signup',component: SignupComponent},
  { path: 'login/login/signup',redirectTo:'signup',pathMatch:'full'},
  { path: 'home', component: HomeComponent, canActivate: [AccessGuard]},
  { path: 'login',component: LoginComponent},
  { path: 'otp',component: OtpComponent},
  { path: 'about',component: AboutComponent},
  { path: 'home/order/history',component: OrderManageComponent,canActivate: [AccessGuard]},
  { path: 'register',component: RegisterComponent},
  { path: 'home/history',component: OrderManageComponent,canActivate: [AccessGuard]},
  { path: 'home/order',component: OrderFormComponent,canActivate: [AccessGuard]},
  { path: 'home/payment', component: PaymentComponent, canActivate: [AccessGuard]},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
