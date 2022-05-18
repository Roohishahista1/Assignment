import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParamsOptions} from '@angular/common/http';
// import { ApiService } from './api.service';

@Component({
  selector: 'app-apicalls',
  templateUrl: './apicalls.component.html',
  styleUrls: ['./apicalls.component.css']
})
export class ApicallsComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "accept": "application/json;charset=utf-8;" })
  };
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  globalQuote(){
    this.http
    .get<any>('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=BJH4S1HKJKE6GYE5',this.httpOptions)
    .subscribe((data: any) => {
      console.log(data);
    });
  }
  dailyTimeSeries(){
    this.http
		.get<any>(' https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GPV.TRV&outputsize=full&apikey=BJH4S1HKJKE6GYE5',this.httpOptions)
		.subscribe((data: any) => {
			console.log(data);
		});
  }
  weeklyAdjustedTimeSeries(){
    this.http
		.get<any>(' https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=TSCO.LON&apikey=BJH4S1HKJKE6GYE5',this.httpOptions)
		.subscribe((data: any) => {
			console.log(data);
		});
  }
  monthlyTimeSeries(){
    this.http
		.get<any>(' https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=BJH4S1HKJKE6GYE5',this.httpOptions)
		.subscribe((data: any) => {
			console.log(data);
		});
  }

}
