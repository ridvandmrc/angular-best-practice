import { NgModule } from '@angular/core';

import {
  ArtistComponent,
  ArtistStoryComponent,
  SongsComponent,
} from './components';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssestModule } from 'src/app/assets/assets.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedModule, AssestModule, BrowserModule, CommonModule],
  declarations: [ArtistComponent, ArtistStoryComponent, SongsComponent],
  bootstrap: [],
  exports: [ArtistComponent, SongsComponent],
})
export class ArtistModule {}
