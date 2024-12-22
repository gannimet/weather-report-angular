import { Component, OnInit, output } from '@angular/core';
import { cities } from '../model/data-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { City } from '../model/weather-types';

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.css'
})
export class CitySelectorComponent implements OnInit {
  readonly citySelected = output<City>();

  readonly cities = cities;
  selectedCity = cities[0];

  ngOnInit(): void {
    this.citySelected.emit(this.selectedCity);
  }

  selectedCityChanged(city: City) {
    this.citySelected.emit(city);
  }
}
