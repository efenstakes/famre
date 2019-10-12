import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './layouts/pages/home/home.component';
import { AboutComponent } from './layouts/pages/about/about.component';
import { ServicesComponent } from './layouts/pages/services/services.component';
import { ViewAgenciesComponent } from './layouts/pages/view-agencies/view-agencies.component';
import { MakeRequestComponent } from './layouts/pages/make-request/make-request.component';
import { CheckRequestComponent } from './layouts/pages/check-request/check-request.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'agencies', component: ViewAgenciesComponent },
  { path: 'foster-request/make', component: MakeRequestComponent },
  { path: 'foster-request/check', component: CheckRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
