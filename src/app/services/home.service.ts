import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  guardarOT(data : any){
    return this.http.post(environment.apiUrl + 'guadarOT', JSON.stringify(data), {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
      
    });
  }
}
