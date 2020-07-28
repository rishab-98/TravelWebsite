import { Component, OnInit } from '@angular/core';
import { TicketForm } from '../../models/Ticket-Form';
import { Router } from '@angular/router';
import { RestapiService } from '../../services/restapi.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  ticketForm: TicketForm;

  constructor(private router: Router, private service: RestapiService) { }

  ngOnInit(): void {
    this.checkLogin();
    this.showData();
  }

  editTicket() {
    console.log(this.ticketForm)
    let resp = this.service.editTicketDetails(this.ticketForm);
    resp.subscribe((data) => {
      console.log(data);
      window.alert("You ticket got updated! ");
      this.router.navigate(["/viewTickets"]);
    })
  }
  routeBack() {
    this.router.navigate(['/submitTicket']);
  }

  checkLogin() {
    if (!this.service.isLogin()) {
      window.alert("Please login first");
      this.router.navigate(["/login"]);
    }
  }
logout(){
  this.service.logout();
}
  showData() {
    var data = sessionStorage.getItem('ticketDetails');
    this.ticketForm = JSON.parse(data);
    console.log(this.ticketForm)
  }
}
