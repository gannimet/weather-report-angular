import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { WeatherWidgetService } from './service/weather-widget.service';
import { CommonModule } from '@angular/common';
import { TemperatureCelsiusPipe } from './pipes/temperature-celsius.pipe';
import { WindSpeedKphPipe } from './pipes/wind-speed-kph.pipe';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { City } from '../types/weather-types';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [CommonModule, TemperatureCelsiusPipe, WindSpeedKphPipe, ReactiveFormsModule],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.css'
})
export class WeatherWidgetComponent {
  readonly widgetService = inject(WeatherWidgetService);

  readonly selectedCity = signal<City | undefined>(undefined);
  readonly weatherData = computed(() => {
    const selectedCity = this.selectedCity();

    if (selectedCity) {
      const { latitude, longitude } = selectedCity;

      return this.widgetService.loadWeatherData(latitude, longitude)();
    }

    return undefined;
  });
}
