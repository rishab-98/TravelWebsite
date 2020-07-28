import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../../services/restapi.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  username: string;
  password: string;
  
  constructor(private router: Router, private service: RestapiService) { }

  ngOnInit(): void {
  }

  adminLogin() {
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      console.log(data)
      if(localStorage.getItem("email") !== null || localStorage.getItem("email")!== undefined){
        console.log("done")
        if (data["role"] === "admin") {
          this.router.navigate(["/adminDashboard"]);
        }
        else {
          window.alert("Please login through user login page");
          this.router.navigate(["/login"]);
        }
      }
      else {
        window.alert("Wrong credentials")
      }
    })
  }
}