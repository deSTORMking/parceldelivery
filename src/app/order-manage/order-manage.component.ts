import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.scss']
})
export class OrderManageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.display();
  }
  display(){
   return localStorage.getItem("users")
  }
  
}
