import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-logout',
  templateUrl: './staff-logout.component.html',
  styleUrls: ['./staff-logout.component.scss']
})
export class StaffLogoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

}
