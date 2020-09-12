import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-agency-page',
  templateUrl: './agency-page.component.html',
  styleUrls: ['./agency-page.component.scss']
})
export class AgencyPageComponent implements OnInit {

  url = 'http://127.0.0.1:3456/api'
  agency

  constructor(private router: Router, private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params)=> {
      console.log('params ', params['params']['id'])
      this.get_agency(params['params']['id'])
    })
  }

  get_agency(id) {
    this.httpClient.get(`${this.url}/agency/${id}`)
    .subscribe((res)=> {
      console.log('agency ', res)
      this.agency = res['agency']
    })
  }// get_agency() { .. }

}
