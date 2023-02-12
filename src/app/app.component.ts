import { Component } from '@angular/core';
import { BillService } from './services/bill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'legislame';

  constructor(private billService:BillService){

  }

  searchBills(searchBillKeys:any){
    console.log("main component");
    console.log(searchBillKeys);
    this.billService.searchBills(searchBillKeys)
      .subscribe(result =>{
        console.log(result);
      });
  }


}
