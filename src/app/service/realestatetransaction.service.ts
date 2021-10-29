import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RealestatetransactionService {
 // private baseUrl = 'http://localhost:8080/api/csv/list';
  private baseUrl = 'http://localhost:8080/api/csv';

  constructor(private http: HttpClient) { }

  public upload(file: any): Subscription {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/upload`, formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }

  public list(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

}
