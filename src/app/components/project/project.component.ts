import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/model/Bill';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  bills:Bill[] = [];

  billTitle:string="";

  constructor(){
    
  }

  addBill(){

    const bill:Bill = {
      title:this.billTitle, 
      date: new Date().toLocaleDateString(),
      votes:1
    };

    this.bills.push(bill);
    this.billTitle ="";
  }

}
