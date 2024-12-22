import { Component, computed, effect, inject, input, OnInit, signal } from '@angular/core';
import { WeatherWidgetService } from './service/weather-widget.service';
import { CommonModule } from '@angular/common';
import { TemperatureCelsiusPipe } from './pipes/temperature-celsius.pipe';
import { WindSpeedKphPipe } from './pipes/wind-speed-kph.pipe';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { City } from '../model/weather-types';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [CommonModule, TemperatureCelsiusPipe, WindSpeedKphPipe, ReactiveFormsModule],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.css'
})
export class WeatherWidgetComponent {
  readonly widgetService = inject(WeatherWidgetService);

  readonly selectedCity = input.required<City>();

  readonly weatherData = toSignal(toObservable(this.selectedCity).pipe(
    mergeMap(({ latitude, longitude }) => {
      return this.widgetService.loadWeatherData(latitude, longitude);
    }),
  ));
}
