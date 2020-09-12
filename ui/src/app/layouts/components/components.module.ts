import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';



@NgModule({
  declarations: [AgencyDetailComponent, AppNavBarComponent, AppFooterComponent],
  exports: [
    AgencyDetailComponent, AppNavBarComponent, AppFooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ComponentsModule { }
