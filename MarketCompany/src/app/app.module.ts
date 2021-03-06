import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatecompanyComponent } from './admin/createcompany/createcompany.component';
import { ImportdataComponent } from './admin/importdata/importdata.component';
import { ManagecompanyComponent } from './admin/managecompany/managecompany.component';
import { UpdateioComponent } from './admin/updateio/updateio.component';
import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { IpoComponent } from './user/ipo/ipo.component';
import { ComparecompanyComponent } from './user/comparecompany/comparecompany.component';
import {CompanylistComponent} from './companylist/companylist.component';
import { ActivateComponent } from './activate/activate.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { ComparesectorComponent } from './user/comparesector/comparesector.component';
import { DisplayuserComponent } from './admin/displayuser/displayuser.component';
import { ManagestockexchangeComponent } from './admin/managestockexchange/managestockexchange.component';
import { ManageexchangeComponent } from './admin/manageexchange/manageexchange.component';
import { IpolistComponent } from './ipolist/ipolist.component';
import { ContactComponent } from './contact/contact.component';
import { ComparecompanylistComponent } from './user/comparecompanylist/comparecompanylist.component';
import { AboutComponent } from './about/about.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UpdateStockComponent } from './admin/update-stock/update-stock.component';
import { UpdateIpoComponent } from './user/update-ipo/update-ipo.component';
import { SectorComponent } from './admin/sector/sector.component';
import { UpdateSectorComponent } from './admin/update-sector/update-sector.component';
import { SectorlistComponent } from './admin/sectorlist/sectorlist.component';
import { StockpriceComponent } from './admin/stockprice/stockprice.component';
import { StockpricelistComponent } from './admin/stockpricelist/stockpricelist.component';
import { UpdateStockpriceComponent } from './admin/update-stockprice/update-stockprice.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UserlistComponent,
    CreatecompanyComponent,
    ImportdataComponent,
    ManagecompanyComponent,
    UpdateioComponent,
    AdminComponent,
    IpoComponent,
    UserComponent,
    ComparecompanyComponent,
    CompanylistComponent,

    ActivateComponent,

    StocklistComponent,

    ComparesectorComponent,

   

    DisplayuserComponent,

   

    ManagestockexchangeComponent,

   

    ManageexchangeComponent,

   

    IpolistComponent,
    ContactComponent,
    ComparecompanylistComponent,
    AboutComponent,
    UpdateUserComponent,
    UpdateCompanyComponent,
    OrderListComponent,
    ContactListComponent,
    UpdateStockComponent,
    UpdateIpoComponent,
    SectorComponent,
    UpdateSectorComponent,
    SectorlistComponent,
    StockpriceComponent,
    StockpricelistComponent,
    UpdateStockpriceComponent,
    
   // IpolistComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
