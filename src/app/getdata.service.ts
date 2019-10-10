import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  _url = 'http://localhost:3000/feedback';

  enroll(user: User) {
    return  this._http.post<any>(this._url , user);
  }
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {}
}
