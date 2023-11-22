import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterByBtnPipe } from './filter-by-btn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterByBtnPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
