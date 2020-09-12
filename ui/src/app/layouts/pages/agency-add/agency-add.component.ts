import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-agency-add',
  templateUrl: './agency-add.component.html',
  styleUrls: ['./agency-add.component.scss']
})
export class AgencyAddComponent implements OnInit {
  
  name = '' 
  city = '' 
  locality = ''
  phone = '' 
  email = ''
  description = ''
  
  url = 'http://127.0.0.1:3456/api'
  saved = false
  has_error = false 
  error = ''
  
  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
  }


  // add agency
  add() { console.log('add')
    this.has_error = false
    this.error = ''
    if( 
      this.name.length < 3 || this.city.length < 4 || 
      this.locality.length < 4 || this.phone.length < 10 ||
      this.email.length < 5 || this.description.length < 5
      ) {
        this.has_error = true 
        this.error = 'Ensure You Have Filled in all the Details'
        return      
    }


    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    let agency = {
      name: this.name, email: this.email, phone: this.phone,
      city: this.city, locality: this.locality,
      description: this.description
    }
    console.log('agency ', agency)
    

    this.httpClient.post(`${this.url}/agency/`, agency, httpOptions)
        .subscribe((res)=> {
          console.log('res ', res)

          if( res['saved'] ) {
            this.saved = true
          }
          
        })



  }// add() { .. }



}
