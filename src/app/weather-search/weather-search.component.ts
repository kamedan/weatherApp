import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value){
    console.log(value);
  }

}
