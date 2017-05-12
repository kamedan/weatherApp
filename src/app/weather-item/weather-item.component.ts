import { Component, OnInit,Input } from '@angular/core';
import { WeatherItem } from '../weather';

@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css'],
  //inputs: ['weatherItem:item' ]
})
export class WeatherItemComponent implements OnInit {
  @Input('item') weatherItem: WeatherItem;

  ngOnInit() {
  }

}
