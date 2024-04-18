import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  guardarOT(data : any){
    return this.http.post(environment.apiUrl + 'guardarOT', JSON.stringify(data), {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
      
    });
  }

  obtieneJobId(){
    return this.http.get(environment.apiUrl + 'obtieneJobId',  {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    });
  }

  obtieneClientes(){
    return this.http.get(environment.apiUrl + 'obtieneClientes',  {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    });
  }
}
