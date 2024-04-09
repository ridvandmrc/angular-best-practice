import { NgModule } from '@angular/core';

import { ButtonComponent, SearchComponent } from './components';
import { AssestModule } from '../assets/assets.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SearchComponent, ButtonComponent],
  exports: [SearchComponent, ButtonComponent],
  imports: [AssestModule, BrowserModule, CommonModule],
})
export class SharedModule {}
