import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showlogin=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  
  }
  loggedin(){
    return localStorage.getItem('userAccessToken');
  }

  logout(){
    
    localStorage.clear();
    this.showlogin=true;
    this.router.navigateByUrl('home');
  }
  // show(){
  // let userToken= localStorage.getItem("userAccessToken") ? true:false;
  // if(userToken){
  //  return true;
  // }
  // else{
  //   this.router.navigateByUrl('login');
  // return false;
  // }
  // }
}
