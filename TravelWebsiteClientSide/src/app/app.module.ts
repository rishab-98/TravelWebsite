import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import {SlideshowModule} from 'ng-simple-slideshow';
import { ChartsModule } from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User Details/login/login.component';
import { RegisterComponent } from './User Details/register/register.component';
import { ForgetCredentialsComponent } from './User Details/forget-credentials/forget-credentials.component';
import { RestapiService } from './services/restapi.service';
import { EditRegistrationComponent } from './User Details/edit-registration/edit-registration.component';
import { UserDashboardComponent } from './User Details/user-dashboard/user-dashboard.component';
import { SubmitTicketComponent } from './User Details/submit-ticket/submit-ticket.component';
import { ViewTicketsComponent } from './User Details/view-tickets/view-tickets.component';
import { TicketDetailsComponent } from './User Details/ticket-details/ticket-details.component';
import { AdminLoginComponent } from './Admin Details/admin-login/admin-login.component';
import { CommonModule } from '@angular/common';
import { EditTicketComponent } from './User Details/edit-ticket/edit-ticket.component';
import { AdminDashboardComponent } from './Admin Details/admin-dashboard/admin-dashboard.component';
import { TicketResponseComponent } from './Admin Details/ticket-response/ticket-response.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CovidDataComponent } from './User Details/covid-data/covid-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
  AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetCredentialsComponent,
    EditRegistrationComponent,
    UserDashboardComponent,
    SubmitTicketComponent,
    ViewTicketsComponent,
    TicketDetailsComponent,
    AdminLoginComponent,
    EditTicketComponent,
    AdminDashboardComponent,
    TicketResponseComponent,
    CovidDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    SlideshowModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    MatTableModule,
    ChartsModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ChartsModule, 
    MatButtonModule,
    MatPaginatorModule,
  ],
  exports:[
    ViewTicketsComponent
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
