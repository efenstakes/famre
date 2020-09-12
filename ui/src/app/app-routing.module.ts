import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './layouts/pages/home/home.component';
import { AboutComponent } from './layouts/pages/about/about.component';
import { ServicesComponent } from './layouts/pages/services/services.component';
import { ViewAgenciesComponent } from './layouts/pages/view-agencies/view-agencies.component';
import { MakeRequestComponent } from './layouts/pages/make-request/make-request.component';
import { CheckRequestComponent } from './layouts/pages/check-request/check-request.component';
import { StaffLoginComponent } from './layouts/pages/staff-login/staff-login.component';
import { StaffDashboardComponent } from './layouts/pages/staff-dashboard/staff-dashboard.component';
import { StaffGuard } from './guards/staff.guard';
import { StaffLogoutComponent } from './layouts/pages/staff-logout/staff-logout.component';
import { AgencyDetailComponent } from './layouts/components/agency-detail/agency-detail.component';
import { AgencyAddComponent } from './layouts/pages/agency-add/agency-add.component';
import { AgencyPageComponent } from './layouts/pages/agency-page/agency-page.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'agencies', component: ViewAgenciesComponent },
  { path: 'agency/add', component: AgencyAddComponent },
  { path: 'agency/:id', component: AgencyPageComponent },
  { path: 'foster-request/make', component: MakeRequestComponent },
  { path: 'foster-request/check', component: CheckRequestComponent },
  { path: 'portals/staff/login', component: StaffLoginComponent },
  { path: 'portals/staff/logout', component: StaffLogoutComponent },
  { 
    path: 'portals/staff/dashboard', 
    component: StaffDashboardComponent,
    // canActivate: [ StaffGuard ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
