import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import {
  ArtistComponent,
  ArtistStoryComponent,
  SongsComponent,
  ArtistListComponent,
} from "./components";
import { SharedModule } from "src/app/shared/shared.module";
import { AssestModule } from "src/app/assets/assets.module";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { CoreModule } from "src/app/core/core.module";

@NgModule({
  imports: [
    SharedModule,
    AssestModule,
    BrowserModule,
    CommonModule,
    CoreModule,
    HttpClientModule,
  ],
  declarations: [
    ArtistComponent,
    ArtistStoryComponent,
    SongsComponent,
    ArtistListComponent,
  ],
  bootstrap: [],
  exports: [ArtistComponent, SongsComponent],
})
export class ArtistModule {}
