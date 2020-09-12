import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter } from 'minimatch';



@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.scss']
})
export class StaffDashboardComponent implements OnInit {

  requests = {
    all: [], filtered: []
  }
  selected_request 
  filter = 'unseen' // all, seen, unseen
  url = 'http://127.0.0.1:3456/api'


  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    let token = localStorage.getItem('token')
    if( !token ) {
      this.router.navigate([ 'portals', 'staff', 'dashboard' ])
    }
    this.get_requests()
  }


  select_request(request) {
    this.selected_request = request
  }

  filter_now(filter) {
    this.filter = filter 
    this.requests = {
      all: this.requests.all, filtered: this.filter_apply()
    }
  }

  filter_apply() {
    if( this.filter == 'all' ) return this.requests.all 
    
    if( this.filter == 'unseen' ) {
      return this.requests.filtered = this.requests.all.filter((req)=> req.seen == false )      
    }
    
    if( this.filter == 'seen' ) {
      return this.requests.all.filter((req)=> req.seen == true )      
    }
  }// filter_apply() {

  get_requests() {
      this.httpClient.get(`${this.url}/request/`)
      .subscribe((res)=> {
        console.log('requests ', res)
        let all_requests = res['requests']
        this.requests.all = all_requests
        this.requests = { all: this.requests.all, filtered: this.filter_apply() }
      })
  }// get_requests() { .. }

  accept(request) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${localStorage.getItem('token')}`
      })
    }
    let id = request['_id']
    this.httpClient.put(`${this.url}/request/${id}/accept`, {}, httpOptions)
    .subscribe((res)=> {
      console.log('res ', res)
      this.requests = res['requests']
    })
  }// accept(request) { .. }
  deny(request) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${localStorage.getItem('token')}`
      })
    }
    let id = request['_id']
    this.httpClient.put(`${this.url}/request/${id}/accept`, {}, httpOptions)
    .subscribe((res)=> {
      console.log('res ', res)
      this.requests = res['requests']
    })
  }// deny(request) { .. }



}
