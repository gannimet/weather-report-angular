import { Component } from '@angular/core';
import { WeatherWidgetComponent } from '../../weather/weather-widget/weather-widget.component';
import { CitySelectorComponent } from "../../weather/city-selector/city-selector.component";
import { City } from '../../weather/types/weather-types';

const cities: City[] = [
  { name: 'Berlin', latitude: 52.52, longitude: 13.41 },
  { name: 'Hamburg', latitude: 53.55, longitude: 9.97 },
  { name: 'München', latitude: 48.13, longitude: 11.58 },
  { name: 'Köln', latitude: 50.94, longitude: 6.96 },
  { name: 'Stuttgart', latitude: 48.78, longitude: 9.18 }
];

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [WeatherWidgetComponent, CitySelectorComponent],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css'
})
export class WeatherPageComponent {

}
