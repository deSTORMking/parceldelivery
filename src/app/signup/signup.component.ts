import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { Twilio } from 'twilio';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  phn:any;
  constructor(private router:Router , private http:HttpClient) { }

  ngOnInit(): void {
  }
  
  redirect(){
      
      this.router.navigateByUrl('otp');

    }
     
    }
    
  
