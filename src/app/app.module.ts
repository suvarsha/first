import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcmpComponent } from './firstcmp/firstcmp.component';
import { FirstdirectDirective } from './firstdirect.directive';
import { Pipe1Pipe } from './pipe1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstcmpComponent,
    FirstdirectDirective,
    Pipe1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
