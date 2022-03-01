import { Component, OnInit } from '@angular/core';
import { User} from '../user';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  topics=['Pickup','Delivery','Pickup and Delivery'];
  payment=['COD','Card(COMING SOON)','Wallets(COMING SOON)','Net Banking(COMING SOON)'];
  userModel = new User('','','',0,0,0,'','','','');

  user:any= {};
  users:any=[];
  cost:number=0.0;
  popup=false;
  show=false;
  constructor() { }

  ngOnInit(): void {

  }

  estimate(){
   console.log( this.cost= this.userModel.bredth*this.userModel.length+this.userModel.weight*10);
   this.popup=true;
  }
  

  onsubmit(val:any){
    // console.log(val);
    this.user= Object.assign(this.user,val);

    //save form data in local storage
    this.users=[this.user,...this.users];
    localStorage.setItem(this.users,JSON.stringify(val));
    
  } 
  
  
}
