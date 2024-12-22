import { Component, signal } from '@angular/core';
import { WeatherWidgetComponent } from '../../weather/weather-widget/weather-widget.component';
import { CitySelectorComponent } from "../../weather/city-selector/city-selector.component";
import { City } from '../../weather/model/weather-types';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [WeatherWidgetComponent, CitySelectorComponent],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css'
})
export class WeatherPageComponent {
  readonly selectedCity = signal<City | undefined>(undefined);

  citySelected(city: City) {
    this.selectedCity.set(city);
  }
}
