import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../../services/restapi.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  classList;

  ngOnInit() {
    this.carousel(1);
  }

  constructor(private router: Router, private service: RestapiService) { }

  viewTickets() {
    this.router.navigate(['/viewTickets']);
  }

  submitTicket() {
    this.router.navigate(['/submitTicket']);
  }

  logout() {
    this.service.logout();
  }
  carousel(index: number) {
    this.classList = document.getElementsByClassName("mySlides");
    for (var i = 0; i < this.classList.length; i++) {
      (this.classList[i]).style.display = "none";
    }
    if (index > 1) {
      index = 0;
    }
    (this.classList[index]).style.display = "block";
    index = index + 1;
    window.setTimeout(() => this.carousel(index), 4000); // Change image every 2 seconds
  }

  checkLogin() {
    if (!this.service.isLogin()) {
      window.alert("Please login first");
      this.router.navigate(["/login"]);
    }
  }
}





