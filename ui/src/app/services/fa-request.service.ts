import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FaRequestService {

  url = 'http://localhost:3456'

  constructor(private http: HttpClient) { }



  make(details) {
    return this.http.post(`${this.url}/api/request`, details)
  }
  details(code) {
    return this.http.get(`${this.url}/api/request/${code}`)
  }


}
