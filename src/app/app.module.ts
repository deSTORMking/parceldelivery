import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule} from '@angular/common/http';
import { OtpComponent } from './otp/otp.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderManageComponent } from './order-manage/order-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    NotfoundComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    OtpComponent,
    AboutComponent,
    RegisterComponent,
    OrderFormComponent,
    PaymentComponent,
    OrderManageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
