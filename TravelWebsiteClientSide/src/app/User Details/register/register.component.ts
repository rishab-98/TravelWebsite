import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:User;
state:string;
zip:string;
city:string;
address1:string;
address2:string;
telephone:string;
businessUnit:string;
title:string;
firstName:string;
lastName:string;
email:string;
country:string;
registrationForm : FormGroup
validated =false;
  result: string;

  constructor(private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validations();
    this.makeid();
  }

  get f() {
     return this.registrationForm.controls; 
    }

routeToEdit(){
  this.validated = true;
  if (this.registrationForm.invalid) {
    console.log("wronf")
     return;
  }
    this.router.navigate(["/editRegister"]);
this.user= new User(this.registrationForm.value.email, this.registrationForm.value.firstName, this.registrationForm.value.lastName,
  this.registrationForm.value.businessUnit, this.registrationForm.value.title, this.registrationForm.value.telephone,
  this.registrationForm.value.address1, this.registrationForm.value.address2, this.registrationForm.value.city,
  this.registrationForm.value.state, this.registrationForm.value.zip, this.registrationForm.value.country, this.result, "user")

  sessionStorage.setItem("User",JSON.stringify(this.user));


  this.router.navigate(["/editRegister"]);
}

validations(){
  this.registrationForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    businessUnit: ['', [Validators.required]],
    title: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@nagarro+.com")]],
    telephone: ['', [Validators.required,Validators.maxLength(15)]],
    address2: [''],
    address1: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    country: ['', [Validators.required]]
  });
}
makeid() :any{
  this.result='';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 8; i++ ) {
     this.result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(this.result);
  return this.result;
}
}
