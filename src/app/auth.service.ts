import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUsers() {
    throw new Error("Method not implemented.");
  }
  constructor(private httpClient: HttpClient, private router: Router) { }

  public login(userInfo: User){

    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  //function to redirect to login page
  public isLoggedIn(){
    
    if(localStorage.getItem('username')==null)
    {
      this.router.navigateByUrl('/login');
    }
     return localStorage.getItem('username') !== null;
    }
  //function to logout   
  public logout(){
    localStorage.removeItem('username');
  }
  //function for fetching data from json file
  getusers() {
    return this.httpClient.get('http://localhost:3000/users')
  }
}

