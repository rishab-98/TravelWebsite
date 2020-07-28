import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})

export class RestapiService {
  fileUrl
  retrieveResonse: Object;
  base64Data: any;
  retrievedImage: string;
  file: any;
  constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer) { }

  login(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get("http://localhost:9001/", { headers, responseType: 'json' }).pipe(
      map(
        userData => {
          sessionStorage.setItem("email", userData["email"])
          console.log(sessionStorage.setItem("email", userData["email"]))
          sessionStorage.setItem("name", userData["firstName"])
          return userData;
        }
      )
    );
  }

  register(user) {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    return this.http.post("http://localhost:9001/register", user, { headers, responseType: 'text' as 'json' }).pipe(
      map(
        userData => {
          console.log(userData);
          return userData;
        }
      )
    );
  }

  sendEmail(mail: string) {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    return this.http.post("http://localhost:9001/forget", mail, { headers, responseType: 'text' as 'json' }).pipe(
      map(
        userData => {
          console.log(mail);
          return userData;
        }
      )
    );
  }
  public showTicket(user, page: number) {
    return this.http.get("http://localhost:9001/viewUserTicket/" + user + '?page=' + page, { responseType: 'json' }).pipe(
      map(
        userData => {
          console.log(userData);
          return userData;
        })
    );
  }


  showAllTickets() {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    return this.http.get("http://localhost:9001/viewTicket", { headers, responseType: 'json' }).pipe(
      map(
        userData => {
          console.log("dat=" + userData);
          return userData;
        }
      )
    );
  }

  public submitTicket(newTicket) {
    console.log(newTicket);
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    return this.http.post("http://localhost:9001/submitTicket", newTicket, { headers, responseType: 'text' as 'json' }).pipe(
      map(
        userData => {
          return userData;
        })
    );
  }

  editTicketDetails(ticket) {
    console.log(ticket)
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    return this.http.patch("http://localhost:9001/updateTicket", ticket, { headers, responseType: 'text' as 'json' }).pipe(
      map(
        userData => {
          return userData;
        })
    );
  }

  uploadImage(imageData) {
    console.log(imageData)
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    return this.http.post("http://localhost:9001/uploadImage", imageData, { headers, observe: 'response' }).pipe(
      map(
        userData => {
          return userData;
        })
    );
  }


  isLogin(): boolean {
    if (sessionStorage.getItem("email") === undefined || sessionStorage.getItem("email") === null) {
      return false;
    }
    else {
      return true;
    }
  }

  logout() {
    console.log("logout")
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    this.router.navigate(["/login"])
  }
  adminLogout() {
    console.log("logout")
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    this.router.navigate(["/adminLogin"])
  }


}








