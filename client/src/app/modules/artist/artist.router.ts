import { Route, Routes } from '@angular/router';
import { ArtistComponent } from './components';

export const artistRouter: Routes = [
  { path: 'artist', children: [{ path: ':name', component: ArtistComponent }] },
];
