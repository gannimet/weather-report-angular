import { TestBed } from '@angular/core/testing';

import { WeatherWidgetService } from './weather-widget.service';

describe('WeatherWidgetService', () => {
  let service: WeatherWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
