import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../../services/restapi.service';
import { TicketForm } from 'src/app/models/Ticket-Form';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  ticket: TicketForm[] = [];
  page: number = 0;
  pages: Array<number>;

  ELEMENT_DATA = this.ticket

  dataSource = new MatTableDataSource<TicketForm>(this.ELEMENT_DATA);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['ticketid', 'name', 'status', 'priority', 'ticket_date', 'project_name', 'travel_city', 'Extra'];

  constructor(private router: Router, private service: RestapiService) { }

  ngOnInit(): void {
    this.showTickets();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    this.checkLogin();
 
    

  }

  // setPage(i, event: any) {
  //   event.preventDefault();
  //   this.page = i;
  //   this.showTickets();
  // }

  routeToDetail(todo: TicketForm) {
    console.log(todo.ticketid);
    sessionStorage.setItem('ticketObject', JSON.stringify(todo));
    console.log(sessionStorage.getItem('ticketObject'));
    this.router.navigate(['/ticketResponse']);
  }

  showTickets() {
    let resp = this.service.showAllTickets();
    resp.subscribe((data) => {
      console.log(data)
      const length = Object.keys(data).length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        this.ticket[i] = new TicketForm();
        this.ticket[i] = data[i];
      }
      this.dataSource.data=this.ticket;
      console.log(this.ticket)
    })
  }
  checkLogin() {
    if (!this.service.isLogin()) {
      window.alert("Please login first");
      this.router.navigate(["/login"]);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter)

  }
  logout() {
    this.service.adminLogout();
  }
}


