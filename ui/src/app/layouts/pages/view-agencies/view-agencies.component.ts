import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-agencies',
  templateUrl: './view-agencies.component.html',
  styleUrls: ['./view-agencies.component.scss']
})
export class ViewAgenciesComponent implements OnInit {

  agencies = []
  url = 'http://127.0.0.1:3456/api'

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.get_agencies()
  }

  get_agencies() {
    this.httpClient.get(`http://localhost:3456/api/agency/`)
    .subscribe((res)=> {
      console.log('agencies ', res)
      this.agencies = res['agencies']
    })
  }// get_agencies() { .. }

  view_agency(agency) { console.log('hey move')
    this.router.navigate([ 'agency', agency['_id'] ])
  }



}
