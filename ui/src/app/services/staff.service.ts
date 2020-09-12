import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  url = 'http://localhost:3456/api'

  constructor(private httpClient: HttpClient) { }

  login(user) {
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': `Bearer ${token}` 
    //   })
    // }
    return this.httpClient.post(`${this.url}/staff/login`, { ...user })
  }// login(user) { .. }

  save_login_data(login_data) {
    localStorage.setItem('token', login_data['token'])
    localStorage.setItem('user', JSON.stringify(login_data['user']))
  }// save_login_data(login_data) { .. }


}
