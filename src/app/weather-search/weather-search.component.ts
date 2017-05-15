import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import {WeatherItem} from '../weather';

@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  location  ='';
 
  constructor(private _weatherService:WeatherService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('loc', this.location);
    this._weatherService.searchWeatherData(this.location)
    .subscribe(
      data => {
        const weatherItem = new WeatherItem(data.name, data.weather[0].description,data.main.temp );
        this._weatherService.addWeatherItem(weatherItem);
      }
    )
  }
 
}
