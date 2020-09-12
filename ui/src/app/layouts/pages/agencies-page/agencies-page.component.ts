import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agencies-page',
  templateUrl: './agencies-page.component.html',
  styleUrls: ['./agencies-page.component.scss']
})
export class AgenciesPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('mki')
    this.activatedRoute.paramMap.subscribe((params)=> {
      console.log('params ', params)
    })
  }

}
