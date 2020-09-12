import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { FaRequestService } from 'src/app/services/fa-request.service';



@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.scss']
})
export class MakeRequestComponent implements OnInit {

  current_step = 1
  agency = 'any'
  age_range = 'any'
  family = {
    city: '', locality: '', number_of_parents: 0, works: false,
    id: '', phone: '', email: ''
  }
  adoption_code = ''

  saved: Boolean = false
  is_loading: Boolean = false
  errored: Boolean = false

  constructor(private router: Router, private faRequestService: FaRequestService) { }

  ngOnInit() {
  }


  go_next_step() {
    if( this.current_step == 3 ) return 

    this.current_step = (this.current_step + 1)
  }
  go_prev_step() {
    if( this.current_step == 1 ) return 

    this.current_step = (this.current_step - 1) 
  }

  make_request() {
    console.log(this.family)
    console.log(this.agency)
    console.log(this.age_range);

    this.errored = false
    
    if( 
      this.family.city.length < 3 || this.family.email.length < 4 || 
      this.family.phone.length < 10 || this.family.locality.length < 3
      ){
        this.errored = true 
        return
      }

    let details = {
      family: this.family, agency: this.agency, age_range: this.age_range
    }
    this.is_loading = true
    this.faRequestService.make(details)
        .subscribe((res)=> {

          this.is_loading = false 

          if( res['saved'] ) {
            this.saved = true
            this.adoption_code = res['ref']
          } else {
            this.errored = false
          }
          
        })
    
  }

  go_to_check_status() {
    this.router.navigate([ 'foster-request', 'check' ])
  }
 

}
