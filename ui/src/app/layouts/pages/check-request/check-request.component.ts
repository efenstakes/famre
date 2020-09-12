import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FaRequestService } from 'src/app/services/fa-request.service';



@Component({
  selector: 'app-check-request',
  templateUrl: './check-request.component.html',
  styleUrls: ['./check-request.component.scss']
})
export class CheckRequestComponent implements OnInit {

  request = null
  code = null
  error = ''

  constructor(private router: Router, private faRequestService: FaRequestService) { }

  ngOnInit() {
  }

  check_status() {
    this.error = ''

    this.faRequestService.details(this.code)
        .subscribe((res)=> {

          if( res['request']['_id'] ) {
            this.request = res['request']
          } else {
            this.error = 'You Entered An Invalid Code'
          }

        })

  }// check_status() { .. }

  search_again() {
    this.request = null
  }// search_again() { .. }



}
