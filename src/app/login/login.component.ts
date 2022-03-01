import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string="";
  pass:string="";
  showlogin=false;
  
  login(){
    if(this.email == "user" && this.pass=="pass"){
     localStorage.setItem("userAccessToken",this.email);
     console.log("success");
     this.showlogin = true;
     this.router.navigateByUrl('home');
    }  
    else{
      console.log("invalid credentials")
    }
  }
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // onsubmit(){
  //   console.log();
  // }

}
