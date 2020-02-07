import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CreatecompanyComponent } from './admin/createcompany/createcompany.component';
import { ImportdataComponent } from './admin/importdata/importdata.component';
import { ManagecompanyComponent } from './admin/managecompany/managecompany.component';
import { ManageexchangeComponent } from './admin/manageexchange/manageexchange.component';
import { UpdateioComponent } from './admin/updateio/updateio.component';
import { AdminComponent } from './admin/admin/admin.component';


const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'admin/createcompany',component:CreatecompanyComponent},
  {path:'admin/importdata',component:ImportdataComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/managecompany',component:ManagecompanyComponent},
  {path:'admin/manageexchange',component:ManageexchangeComponent},
  {path:'admin/updateio',component:UpdateioComponent},
  {path:'',component:HomeComponent},

  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
