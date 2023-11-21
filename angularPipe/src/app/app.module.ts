import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpGadgetPipe } from './emp-gadget.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpGadgetPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
