import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { jquery } from 'jquery';
import { bootstrap } from 'bootstrap';

import { AppComponent } from './app.component';
import { CarlComponent } from './carl/carl.component';
@NgModule({
  declarations: [
    AppComponent,
    CarlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
