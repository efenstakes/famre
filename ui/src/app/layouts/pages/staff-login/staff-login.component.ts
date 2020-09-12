import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../services/staff.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.scss']
})
export class StaffLoginComponent implements OnInit {

  url = 'http://localhost:3456/api'

  email = ''
  password = ''
  has_error = false
  error = ''

  constructor(private httpClient: HttpClient, private router: Router, private staffService: StaffService) { }

  ngOnInit() {
  }

  // log a staffe in
  login() { console.log('email ', this.email, ' pawd ', this.password)
    if( this.email.length < 5 || this.password.length < 5 ) {
      this.has_error = true 
      this.error = 'Check Your Details And Retry'
      return
    }
    
    let user = { email: this.email, password: this.password }
    return this.httpClient.post(`${this.url}/staff/login`, { ...user })
        .subscribe((res)=> {

          localStorage.setItem('token', res['token'])
          localStorage.setItem('user', JSON.stringify(res['user']))
          console.log('res ', res)

          this.router.navigate([ 'portals', 'staff', 'dashboard' ])
          
        })

    // this.httpClient.get('http://127.0.0.1:3456/api/request/')
    //     .subscribe((res)=> {
    //       console.log('res ', res)
    //     })

  }// login() { .. }


}
