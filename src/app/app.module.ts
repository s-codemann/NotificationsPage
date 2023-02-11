import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwnGroups } from 'src/services/own-group.service';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OwnGroups],
  bootstrap: [AppComponent]
})
export class AppModule { }
