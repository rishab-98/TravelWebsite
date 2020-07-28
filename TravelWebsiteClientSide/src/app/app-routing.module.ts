import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './User Details/login/login.component';
import { RegisterComponent } from './User Details/register/register.component';
import { EditRegistrationComponent } from './User Details/edit-registration/edit-registration.component';
import { ForgetCredentialsComponent } from './User Details/forget-credentials/forget-credentials.component';
import { AdminDashboardComponent } from './Admin Details/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './User Details/user-dashboard/user-dashboard.component';
import { ViewTicketsComponent } from './User Details/view-tickets/view-tickets.component';
import { SubmitTicketComponent } from './User Details/submit-ticket/submit-ticket.component';
import { TicketDetailsComponent } from './User Details/ticket-details/ticket-details.component';
import { AdminLoginComponent } from './Admin Details/admin-login/admin-login.component';
import { TicketResponseComponent } from './Admin Details/ticket-response/ticket-response.component';
import { EditTicketComponent } from './User Details/edit-ticket/edit-ticket.component';
import { CovidDataComponent } from './User Details/covid-data/covid-data.component';




const routes: Routes = [
  {path: "", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"editRegister", component:EditRegistrationComponent},
  {path:"forget", component:ForgetCredentialsComponent},
  {path:"adminDashboard", component:AdminDashboardComponent},
  {path:"userDashboard", component:UserDashboardComponent},
  {path:"viewTickets", component:ViewTicketsComponent},
  {path:"submitTicket", component:SubmitTicketComponent},
  {path:"ticketDetails", component:TicketDetailsComponent},
  {path:"adminLogin", component: AdminLoginComponent},
  {path:"ticketResponse", component: TicketResponseComponent},
  {path:"editTicket", component: EditTicketComponent},
  {path:"covidData", component:CovidDataComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
