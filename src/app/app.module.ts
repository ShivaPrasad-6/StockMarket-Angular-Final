import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './LoC/home/home.component';
import { LoginComponent } from './LoC/login/login.component';
import { SignupComponent } from './Loc/signup/signup.component';
import { AdminportalComponent } from './LoC/adminportal/adminportal.component';
import { NavbarComponent } from './Loc/navbar/navbar.component';
import { Ac1Component } from './LoC/ac1/ac1.component';
import { Ac2Component } from './LoC/ac2/ac2.component';
import { Ac3Component } from './LoC/ac3/ac3.component';
import { Ac4Component } from './LoC/ac4/ac4.component';
import { UserportalComponent } from './LoC/userportal/userportal.component';
import { Uc1Component } from './LoC/uc1/uc1.component';
import { Uc2Component } from './LoC/uc2/uc2.component';
import { Uc3Component } from './LoC/uc3/uc3.component';
import { Uc4Component } from './LoC/uc4/uc4.component';
import { AddcompanyComponent } from './LoC/ac2/addcompany/addcompany.component';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserListComponent } from './userlist/userlist.component';
import {DataTablesModule} from 'angular-datatables';
import { UpdatecompanyComponent } from './LoC/ac2/updatecompany/updatecompany.component';
import { AddmanageexchangeComponent } from './LoC/ac3/addmanageexchange/addmanageexchange.component';
import { AddipodetailsComponent } from './LoC/ac4/addipodetails/addipodetails.component';
import { Ac5Component } from './LoC/ac5/ac5.component';
import { AddsectorsComponent } from './LoC/ac5/addsectors/addsectors.component';
import { Ac6Component } from './LoC/ac6/ac6.component';
import { AddstockpriceComponent } from './LoC/ac6/addstockprice/addstockprice.component';
import { HighchartsChartModule } from 'highcharts-angular';

import { HighchartsService } from 'src/app/HighchartsService.service';
import { LogoutComponent } from './LoC/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminportalComponent,
    NavbarComponent,
    Ac1Component,
    Ac2Component,
    Ac3Component,
    Ac4Component,
    UserportalComponent,
    Uc1Component,
    Uc2Component,
    Uc3Component,
    Uc4Component,
    AddcompanyComponent,
    UserListComponent,
    UpdatecompanyComponent,
    AddmanageexchangeComponent,
    AddipodetailsComponent,
    Ac5Component,
    AddsectorsComponent,
    Ac6Component,
    AddstockpriceComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HighchartsChartModule
  ],
  providers: [HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
