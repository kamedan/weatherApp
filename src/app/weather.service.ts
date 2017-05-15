import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather.data';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {WeatherItem} from './weather';

@Injectable()
export class WeatherService {

  constructor(private _http:Http){

  }
  getWeatherItems(){
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: WeatherItem){
    WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityName):Observable<any>{
    console.log('service', cityName);
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&APPID=49482fe04dafa527a9a5550c0f870424&units=metric')
            .map(response => response.json())
            .catch(error => {
              console.error(error);
              return Observable.throw(error.json());
            })
  }
}
