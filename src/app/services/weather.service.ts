import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class WeatherService {
  constructor(private _http: HttpClient) {}

  daysWeather() {
    const urlAPI =
      "https://api.openweathermap.org/data/2.5/forecast/daily?q=Barcelona,es&cnt=7&units=metric&appid=7dec162d0a4ae0d46539bf0a5c2e48e3";
    return this._http.get(urlAPI).map(res => res);
  }
}
