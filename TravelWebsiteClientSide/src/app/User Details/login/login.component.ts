import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../services/restapi.service';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  invalidLogin = false;
  message: any;
  http: HttpClient;
  get: any;
  role: string;
  // user: User = new User();
  constructor(private service: RestapiService, private router: Router, http: HttpClient) { }

  ngOnInit(): void {
    this.login();
  }

  checkLogin() {
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.role = data["role"];
      console.log(data["firstName"])
      if (sessionStorage.getItem("email") !== null || sessionStorage.getItem("email") !== undefined) {
        console.log("done")
        console.log(data["role"]);
        if (data["role"] === "user") {
          this.router.navigate(["/userDashboard"]);
        }
        else {
          window.alert("Please login through Admin Login Page");
          this.router.navigate(["/adminLogin"]);
        }
      }
      else {
        window.alert("Wrong credentials")
      }
    })
  }

  routeToRegister() {
    this.router.navigate(["/register"]);
  }

  forget() {
    this.router.navigate(['/forget']);
  }

  routeToAdmin() {
    this.router.navigate(["/adminLogin"]);
  }

  login() {
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      console.log(data);
    })
  }
}










