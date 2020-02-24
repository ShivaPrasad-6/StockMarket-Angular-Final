import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './LoC/home/home.component';
import { LoginComponent } from './LoC/login/login.component';
import { AdminloginComponent } from './LoC/adminlogin/adminlogin.component';
import { SignupComponent } from './Loc/signup/signup.component';
import { AdminportalComponent } from './LoC/adminportal/adminportal.component';
import { NavbarComponent } from './Loc/navbar/navbar.component';
import { Ac1Component } from './LoC/ac1/ac1.component';
import { Ac2Component } from './LoC/ac2/ac2.component';
import { Ac3Component } from './LoC/ac3/ac3.component';
import { Ac4Component } from './LoC/ac4/ac4.component';
import { Uc1Component } from './LoC/uc1/uc1.component';
import { Uc2Component } from './LoC/uc2/uc2.component';
import { Uc3Component } from './LoC/uc3/uc3.component';
import { Uc4Component } from './LoC/uc4/uc4.component';
import { UserportalComponent } from './LoC/userportal/userportal.component';
import { AddcompanyComponent } from './LoC/ac2/addcompany/addcompany.component';
import { UserListComponent } from './userlist/userlist.component';


const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminloginComponent},
  {path:"signup",component:SignupComponent},
  {path:"admin-portal",component:AdminportalComponent},
  {path:"ac1",component:Ac1Component},  
  {path:"add",component:AddcompanyComponent},  
  {path:"ac2",component:Ac2Component},
  {path:"ac3",component:Ac3Component},  
  {path:"ac4",component:Ac4Component},
  {path:"user-portal",component:UserportalComponent},
  {path:"uc1",component:Uc1Component},  
  {path:"uc2",component:Uc2Component},
  {path:"uc3",component:Uc3Component},  
  {path:"uc4",component:Uc4Component},
  {path:"userlist",component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
