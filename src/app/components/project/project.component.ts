import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Bill } from 'src/app/model/Bill';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  @Output() searchParameters = new EventEmitter<any>();
  bills:Bill[] = [];
  billTitle:string="";

  constructor(){    
  }

  searchBill(){
    this.searchParameters.emit(this.billTitle);
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

  addVote(index:number){
    this.bills[index].votes = this.bills[index].votes + 1;
  }

}
