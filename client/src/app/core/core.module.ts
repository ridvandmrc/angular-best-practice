import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {
  LandingPageComponent,
  SidebarComponent,
  NavComponent,
  TableComponent,
  LegendComponent,
} from "./components";
import { BrowserModule } from "@angular/platform-browser";
import { AssestModule } from "../assets/assets.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    LandingPageComponent,
    SidebarComponent,
    NavComponent,
    TableComponent,
    LegendComponent,
  ],
  imports: [BrowserModule, RouterModule, AssestModule, SharedModule],
  exports: [
    LandingPageComponent,
    SidebarComponent,
    NavComponent,
    TableComponent,
    LegendComponent,
  ],
})
export class CoreModule {}
