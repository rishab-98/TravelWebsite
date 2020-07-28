import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private http: HttpClient) { }

  ApiCall(country) {
    console.log(country)
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    return this.http.get("https://api.covid19api.com/country/" + country + "/status/confirmed/live?from=2020-05-15T00:00:00Z&to=2020-06-15T00:00:00Z",
      { headers, responseType: 'json' }).pipe(
        map(
          userData => {
            console.log(userData)
            return userData;
          }
        )
      );
  }
}
