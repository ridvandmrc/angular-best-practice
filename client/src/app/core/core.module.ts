import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  LandingPageComponent,
  SidebarComponent,
  NavComponent,
} from './components';
import { BrowserModule } from '@angular/platform-browser';
import { AssestModule } from '../assets/assets.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LandingPageComponent, SidebarComponent, NavComponent],
  imports: [BrowserModule, RouterModule, AssestModule, SharedModule],
  exports: [LandingPageComponent, SidebarComponent, NavComponent],
})
export class CoreModule {}
