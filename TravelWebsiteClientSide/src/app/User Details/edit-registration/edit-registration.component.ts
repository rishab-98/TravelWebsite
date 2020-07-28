import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { HttpClient } from '@angular/common/http';
import { RestapiService } from '../../services/restapi.service';

@Component({
  selector: 'app-edit-registration',
  templateUrl: './edit-registration.component.html',
  styleUrls: ['./edit-registration.component.css']
})
export class EditRegistrationComponent implements OnInit {
  result: string;
  userData: User;

  constructor(private service: RestapiService, private router: Router, http: HttpClient) { }

  ngOnInit(): void {
  
    this.getUserDetails();
  }

  routeBack() {
    this.router.navigate(['/register'])
  }




  sendUserData() {
    let resp = this.service.register(this.userData);
    resp.subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/login']);
  }

  getUserDetails() {
    var data = sessionStorage.getItem("User");
    this.userData = JSON.parse(data);
  console.log(this.userData.password + this.userData.role);
  }
}