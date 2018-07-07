import { Component } from "@angular/core";
import { WeatherService } from "./services/weather.service";
import { Chart } from "chart.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  chart = [];

  constructor(private _weather: WeatherService) {}

  ngOnInit() {
    this._weather.daysWeather().subscribe(res => {
      const temp_max = res["list"].map(res => res.temp.max);
      const temp_min = res["list"].map(res => res.temp.min);
      const allDays = res["list"].map(res => res.dt);
      const weahterDays = [];

      allDays.forEach(result => {
        let jsDate = new Date(result * 1000);
        let options = {
          weekday: "long",
          month: "short",
          day: "numeric"
        };

        weahterDays.push(jsDate.toLocaleTimeString("es", options));

        this.chart = new Chart("canvas", {
          type: "bar",
          data: {
            labels: weahterDays,
            datasets: [
              {
                label: "Maxima",
                data: temp_max,
                backgroundColor: [
                  "red",
                  "red",
                  "red",
                  "red",
                  "red",
                  "red",
                  "red"
                ],
                fill: false
              },
              {
                label: "Minima",
                data: temp_min,
                backgroundColor: [
                  "#00ffff",
                  "#00ffff",
                  "#00ffff",
                  "#00ffff",
                  "#00ffff",
                  "#00ffff",
                  "#00ffff"
                ],
                fill: false
              }
            ]
          },
          options: {
            legend: {
              dispaly: false
            },
            scales: {
              xAxes: [
                {
                  display: true
                }
              ],
              yAxes: [
                {
                  display: true
                }
              ]
            }
          }
        });
      });
    });
  }
}
