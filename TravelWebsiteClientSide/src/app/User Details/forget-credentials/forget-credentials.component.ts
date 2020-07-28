import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../services/restapi.service';

@Component({
  selector: 'app-forget-credentials',
  templateUrl: './forget-credentials.component.html',
  styleUrls: ['./forget-credentials.component.css']
})
export class ForgetCredentialsComponent implements OnInit {
email:string;
  constructor(private service: RestapiService ) { }

  ngOnInit(): void {
  }

  sendMail(){
    window.alert("Email  will be sent to your registered address");
    let resp= this.service.sendEmail(this.email);
  resp.subscribe(data=>{
    console.log(data)
    
  }) 
  }

}
