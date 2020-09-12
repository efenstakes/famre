import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import {NgxPrintModule} from 'ngx-print'

import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/pages/home/home.component';
import { AboutComponent } from './layouts/pages/about/about.component';
import { ServicesComponent } from './layouts/pages/services/services.component';
import { MakeRequestComponent } from './layouts/pages/make-request/make-request.component';
import { CheckRequestComponent } from './layouts/pages/check-request/check-request.component';
import { ViewAgenciesComponent } from './layouts/pages/view-agencies/view-agencies.component';

import { ComponentsModule } from './layouts/components/components.module';
import { StaffLoginComponent } from './layouts/pages/staff-login/staff-login.component';
import { StaffDashboardComponent } from './layouts/pages/staff-dashboard/staff-dashboard.component';
import { StaffLogoutComponent } from './layouts/pages/staff-logout/staff-logout.component';
import { AgenciesPageComponent } from './layouts/pages/agencies-page/agencies-page.component';
import { AgencyPageComponent } from './layouts/pages/agency-page/agency-page.component';
import { AgencyAddComponent } from './layouts/pages/agency-add/agency-add.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    MakeRequestComponent,
    CheckRequestComponent,
    ViewAgenciesComponent,
    StaffLoginComponent,
    StaffDashboardComponent,
    StaffLogoutComponent,
    AgenciesPageComponent,
    AgencyPageComponent,
    AgencyAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ComponentsModule,

    NgxPrintModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
