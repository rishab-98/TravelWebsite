import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../../services/covid-api.service';
import { covid } from '../../models/covid';
import { RestapiService } from '../../services/restapi.service';

@Component({
  selector: 'app-covid-data',
  templateUrl: './covid-data.component.html',
  styleUrls: ['./covid-data.component.css']
})

export class CovidDataComponent implements OnInit {
  destCountry;
  cdata: covid[] = [];
  date = [];
  cases = [];
  chartData
  chartOptions
  labels
  colors
  title

  constructor(private service: CovidApiService, private restService: RestapiService) { }

  ngOnInit(): void {
  }

  Covid(country) {
    let resp = this.service.ApiCall(country);
    resp.subscribe(data => {
      const length = Object.keys(data).length;
      console.log(length)
      for (var i = 0; i < length; i++) {
        this.cdata[i] = new covid();
        this.cdata[i] = data[i];
        console.log((this.cdata[0].Date).length)
      }
      for (var i = 0; i < 30; i++) {
        this.date[i] = this.cdata[i].Date.slice(0, 10)
        console.log(this.cdata[i].Date)
        this.cases[i] = this.cdata[i].Cases;
      }
      this.graph()
      console.log(this.date[0])
    })


  }

  statistics() {
    console.log(this.destCountry)
    this.Covid(this.destCountry);
  }
  graph() {
    this.title = 'Corona Statistics for past 30 days:';
    this.chartOptions = {
      responsive: true
    }

    this.labels = this.date;
    console.log(this.date);
    this.chartData = [
      {
        label: 'Corona cases',
        data: this.cases
      }
    ];
    this.colors = [
      {
        backgroundColor: 'rgba(77,83,96,0.2)'
      }
    ]
  }

  onChartClick(event) {
    console.log(event);
  }

  logout() {
    this.restService.logout()
  }
}
