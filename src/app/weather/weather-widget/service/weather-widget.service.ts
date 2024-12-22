import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { WeatherDataResponse } from '../../types/weather-types';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class WeatherWidgetService {
  private readonly http = inject(HttpClient);

  loadWeatherData(lat: number, lon: number) {
    return toSignal(this.http
      .get<WeatherDataResponse>(`https://api.brightsky.dev/current_weather?lat=${lat}&lon=${lon}&units=dwd`)
      .pipe(
        map((response) => response.weather)
      ));
  }
}
