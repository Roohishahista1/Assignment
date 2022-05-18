import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParamsOptions} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "accept": "application/json;charset=utf-8;" })
  };
  constructor(private http:HttpClient, private api:ApiService){}
  ngOnInit(){
  //   let headers = new HttpHeaders({
	// 		// 'api-host': 'api.nytimes.com',
	// 		// 'api-key': 'WGA5sJRPktCwyfozwu1lVvNUtvssjKaS'
	// 	});
	
	// }
  
  this.http
  .get<any>('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=BJH4S1HKJKE6GYE5',this.httpOptions)
  .subscribe((data: any) => {
    console.log(data);
  });
     
 
 
  
  // this.api.apiCall().subscribe((data)=>{
  //   console.log("get api data",data);
  // })
  // this.api.getApi().subscribe((data)=>{
  //   console.log("get data",data);
  // })

  }
  
}


