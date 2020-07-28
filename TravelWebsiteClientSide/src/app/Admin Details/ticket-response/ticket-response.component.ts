import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../services/restapi.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Response } from 'src/app/models/Response';
import { TicketForm } from 'src/app/models/Ticket-Form';

@Component({
  selector: 'app-ticket-response',
  templateUrl: './ticket-response.component.html',
  styleUrls: ['./ticket-response.component.css']
})
export class TicketResponseComponent implements OnInit {
  status: string;
  comment: string;
  file: File;
  ticket: TicketForm;
  selectedFile: File;
  fileUrl: any;
  response: Response;
  uploadImageData: any;

  constructor(private service: RestapiService, private router: Router, private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.checkLogin();
    this.retrieveTicket();
  }

  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);
    // console.log(this.file);
     this.response = new Response(this.ticket.ticketid, this.comment, this.status, this.selectedFile,this.selectedFile["name"] )
    this.uploadImageData = new FormData();
    console.log(this.response)
    this.uploadImageData.append('imageFile', this.selectedFile);
    this.uploadImageData.append("comment", this.comment);
    this.uploadImageData.append("status", this.status);
    this.uploadImageData.append("id", this.ticket.ticketid);
    //console.log(uploadImageData);
   
    console.log(this.selectedFile);
    let res = this.service.uploadImage(this.uploadImageData);
    window.alert("Response updated!");
    res.subscribe(data => {
      console.log(data);
    })
  }

  logout() {
    this.service.adminLogout();
  }

  checkLogin() {
    if (!this.service.isLogin()) {
      window.alert("Please login first");
      this.router.navigate(["/login"]);
    }
  }
retrieveTicket() {
  var data = sessionStorage.getItem('ticketObject');
  this.ticket = JSON.parse(data);
  
}

}


