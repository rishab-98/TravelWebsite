import { Component, OnInit, ɵConsole } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../../services/restapi.service';
import { TicketForm } from '../../models/Ticket-Form';


@Component({
  selector: 'app-submit-ticket',
  templateUrl: './submit-ticket.component.html',
  styleUrls: ['./submit-ticket.component.css']
})
export class SubmitTicketComponent implements OnInit {

  ticketForm: FormGroup;
  submitted = false;
  ticketData:TicketForm;
  result:string;
  res: string;
  date;
  month;
  year;

  constructor(private service:RestapiService,private router:Router, private formBuilder: FormBuilder) {}


  ngOnInit() {
    if(!this.service.isLogin()){
      window.alert("Please login first");
      this.router.navigate(["/login"]);
    }
    this.ticketForm = this.formBuilder.group({

    type: ['', [Validators.required]],
    priority: ['', [Validators.required]],
    toTravelCity: ['', [Validators.required]],
    fromTravelCity: ['', [Validators.required]],
    passport: ['', [Validators.required, Validators.maxLength(25)]],
    project: ['', [Validators.required, Validators.maxLength(100)]],
    approval: ['', [Validators.maxLength(100)]],
    duration: ['', [ Validators.maxLength(100)]],
    specify: ['', [Validators.maxLength(500)]],
    expense: [''],
    details: ['', [Validators.required, Validators.maxLength(1000)]],
    endDate: ['', [Validators.required]],
    startDate: ['', [Validators.required]]
    });
this.makeid();
console.log("USER="+sessionStorage.getItem("name"))
console.log(sessionStorage.getItem("email"))
this.res = sessionStorage.getItem("name").slice(0, 3);
console.log(this.res)
const currentDate = new Date();
this.date=currentDate.getDate();
this.month=currentDate.getMonth()+1;
this.year=currentDate.getFullYear();
console.log(this.year + "/" + this.month + "/" + this.date)
}

makeid() :any{
  this.result='';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 3; i++ ) {
     this.result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(this.result);
  return this.result;
}

get f() { return this.ticketForm.controls; }

  
onFormSubmit()  {
  console.log(this.ticketForm.value.type);
 this.submitted = true;
  if (!this.ticketForm.invalid) {


console.log(sessionStorage.getItem("name"));
    this.ticketData= new TicketForm(this.res+"#"+this.result,"2020-05-01",
    sessionStorage.getItem("email"),sessionStorage.getItem("name"),this.ticketForm.value.type,
    this.ticketForm.value.priority,this.ticketForm.value.toTravelCity,
    this.ticketForm.value.fromTravelCity,this.ticketForm.value.startDate,
    this.ticketForm.value.endDate,
    this.ticketForm.value.passport,this.ticketForm.value.project,
    this.ticketForm.value.expense,
    this.ticketForm.value.approval,
    this.ticketForm.value.duration,this.ticketForm.value.specify,
    this.ticketForm.value.details,
    "submitted");

// this.ticketData.ticketid=this.res+"#"+this.result;
// this.ticketData.username=sessionStorage.getItem("user");

console.log(this.ticketData);

    console.log(this.ticketData);
    let resp= this.service.submitTicket(this.ticketData);
    resp.subscribe(data=>{
  console.log(data);
    })
 
    sessionStorage.setItem('ticketDetails', JSON.stringify(this.ticketData));
    console.log(this.ticketData);
    this.router.navigate(['/editTicket']);

}

}

logout(){
  this.service.logout()
}


}

