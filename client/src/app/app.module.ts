import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { artistRouter } from './modules/artist/artist.router';
import { RouterModule } from '@angular/router';
import { ArtistModule } from './modules/artist/artist.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(artistRouter),
    ArtistModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
