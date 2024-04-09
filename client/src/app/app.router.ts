import { Routes } from '@angular/router';
import { LandingPageComponent } from './core/components';
import { artistRouter } from './modules/artist/artist.router';

const AppRoute: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [...artistRouter],
  },
];
