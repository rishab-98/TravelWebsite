import { Component, OnInit, NgModule } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { RestapiService } from '../../services/restapi.service';
import { TicketForm } from 'src/app/models/Ticket-Form';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})

export class ViewTicketsComponent implements Resolve<any> {
  ticket: TicketForm[] = [];
  ticketData: string;
  todo: number = 0;
  page:number=0;
  pages:Array<number>;

  constructor(private router: Router, private service: RestapiService) { }

  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.getTicketList();
  }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    //console.log(sessionStorage.getItem("email"))
    this.checkLogin();
    
    this.getTicketList();
    
  }


  routeToDetail(id: TicketForm) {
    //console.log(id.ticketid);
    sessionStorage.setItem('ticketDetails', JSON.stringify(id));
    //console.log(sessionStorage.getItem('ticketObject'));
    window.open('/ticketDetails');
  }

  logout() {
    this.service.logout()
  }

  checkLogin() {
    if (!this.service.isLogin()) {
      window.alert("Please login first");
      this.router.navigate(["/login"]);
    }
  }

  getTicketList(){
    let resp=this.service.showTicket(sessionStorage.email,this.page);
      resp.subscribe(Items => {
        console.log(Items["content"]);
        this.ticket=Items['content'];
        this.pages=new Array(Items['totalPages'])
  
  })
  }
}
