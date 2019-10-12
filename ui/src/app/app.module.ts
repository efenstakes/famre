import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/pages/home/home.component';
import { AboutComponent } from './layouts/pages/about/about.component';
import { ServicesComponent } from './layouts/pages/services/services.component';
import { MakeRequestComponent } from './layouts/pages/make-request/make-request.component';
import { CheckRequestComponent } from './layouts/pages/check-request/check-request.component';
import { ViewAgenciesComponent } from './layouts/pages/view-agencies/view-agencies.component';

import { ComponentsModule } from './layouts/components/components.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    MakeRequestComponent,
    CheckRequestComponent,
    ViewAgenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
