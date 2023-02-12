import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) {
    
  }

  searchBills(searchKeys:string) : Observable<any>{

    //let URL = "localhost:8080/bills?keys="+searchKeys;
    let URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
    return this.http.get(URL);
  }
}
