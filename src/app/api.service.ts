import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient:HttpClient) { }
  // apiCall(){
  //   return this.http.get('https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=WGA5sJRPktCwyfozwu1lVvNUtvssjKaS')
  // }
  // getApi():Observable<any>{
  //   return this.httpclient.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=BJH4S1HKJKE6GYE5")
  // }
}

