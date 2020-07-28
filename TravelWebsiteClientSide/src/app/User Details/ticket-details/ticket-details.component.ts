import { Component, OnInit, NgModule, ɵConsole } from '@angular/core';
import { RestapiService } from '../../services/restapi.service';
import { Router } from '@angular/router';
import { TicketForm } from 'src/app/models/Ticket-Form';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/models/Response';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})


export class TicketDetailsComponent implements OnInit {
  ticket: TicketForm;
  isShow: boolean;
  fileUrl
response:Response;
  retrieveResonse: any;
  base64Data: any;
  retrievedImage: string;
  uploadImageData: any;
  file: (file: any) => any;
  uploadImage: any;
  download: string;
  comment: any;
  name: any;
  id: string;

  constructor(private http:HttpClient,private service: RestapiService, private router: Router, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    var data = sessionStorage.getItem('ticketDetails');
    this.ticket = JSON.parse(data);
    this.checkLogin();
    this.showTicketDetail();
    console.log(this.ticket.status);
    this.id=this.ticket.ticketid
  }

  editTicket() {
    if (this.ticket.status === "In Process" || this.ticket.status === "Done") {
      window.alert("Ticket is In process. You cannot update it");
    }
    else {
      this.router.navigate(["/editTicket"]);
    }
  }

  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    console.log(this.ticket.ticketid)
        this.uploadImageData = new FormData();
    this.uploadImageData.append("id", this.ticket.ticketid);
    

   this.http.post('http://localhost:9001/getResponse', this.ticket.ticketid)
      .subscribe(
        res => {
          console.log(res);
          
          this.retrieveResonse = res["file"];
         this.response=new Response(this.ticket.ticketid, res["comment"], res["status"],res["file"], res["name"], res["contentType"]);
          this.base64Data = this.retrieveResonse;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.comment=res["comments"]
          this.name=res["name"];
         // console.log(this.retrievedImage)
          console.log( this.retrieveResonse.getContentType);
        
         if(res["contentType"]==="application/pdf"){
          this.download="document.pdf"
        }
        else{
          this.download="document.jpeg"
        }
        console.log(this.download);
  })
  
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

  showTicketDetail() {
    var data = sessionStorage.getItem('ticketDetails');
    this.ticket = JSON.parse(data);
  }
}