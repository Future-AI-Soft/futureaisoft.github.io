import { Injectable } from '@angular/core';
import { API } from '../const';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaissService {

  constructor(private http: HttpClient) { }



  saveContact(data: any){
    return this.http.post<any>(API.BASE_URL_BO+API.SAVE_CONTACT, data)
      .toPromise()
      .then(res => <any>res)
      .then(data => { return data; });
  }
}
