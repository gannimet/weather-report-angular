import { Routes } from '@angular/router';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';

export const routes: Routes = [
  {
    path: 'weather',
    component: WeatherPageComponent,
  },
  {
    path: 'todo',
    component: TodoPageComponent,
  },
  {
    path: '**',
    redirectTo: '/weather',
  },
];
