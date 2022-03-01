import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  
  key:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirect(){
    if(this.key=='0000'){
   this.router.navigateByUrl('register');
  }
  else{
    alert('invalid otp');
  }
}

}
